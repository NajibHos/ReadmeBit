'use client';

import { createContext, useContext, useReducer, useEffect, ReactNode, useRef }
from 'react';
import { ReadmeWidget } from './types';

// Types
interface ReadmeState {
  widgets: ReadmeWidget[];
  currentMarkdown: string;
  isManualEdit: boolean;
  saveStatus: 'idle' | 'saving' | 'saved';
  lastSavedAt: number | null;
  cursorPosition: number; // Track cursor position in editor
}

// Context type
interface ReadmeContextType {
  state: ReadmeState;
  addWidget: (widget: ReadmeWidget) => void;
  clearAll: () => void;
  updateMarkdown: (markdown: string) => void;
  setCursorPosition: (position: number) => void;
  isManualEdit: boolean;
  saveStatus: ReadmeState['saveStatus'];
  lastSavedAt: number | null;
}

// Action types
type ReadmeAction =
  | { type: 'ADD_WIDGET'; payload: ReadmeWidget }
  | { type: 'CLEAR_ALL' }
  | { type: 'UPDATE_MARKDOWN'; payload: string }
  | { type: 'SET_SAVE_STATUS'; payload: { status: ReadmeState['saveStatus'];
    time?: number | null } }
  | { type: 'SET_CURSOR_POSITION'; payload: number };

// Helper function to generate markdown from widgets
const generateReadmeMarkdown = (widgets: ReadmeWidget[]): string => {
  return widgets.map((widget) => widget.content).join('\n\n');
};

// Initial state
const initialState: ReadmeState = {
  widgets: [],
  currentMarkdown: '',
  isManualEdit: false,
  saveStatus: 'idle',
  lastSavedAt: null,
  cursorPosition: 0,
};

const readmeReducer = (state: ReadmeState, action: ReadmeAction): ReadmeState => {
  switch (action.type) {
    case 'ADD_WIDGET': {
      const newWidgets = [...state.widgets, action.payload];
      let newMarkdown: string;

      if (state.isManualEdit) {
        // Insert widget content at cursor position
        const before = state.currentMarkdown.substring(0, state.cursorPosition);
        const after = state.currentMarkdown.substring(state.cursorPosition);

        // Check if before/after already have line breaks
        const beforeEndsWithBreak = before.endsWith('\n\n') || before.endsWith('\n');
        const afterStartsWithBreak = after.startsWith('\n\n') || after.startsWith('\n');

        let beforeSeparator = '';
        let afterSeparator = '';

        // Add separator before only if before has content and doesn't already end with breaks
        if (before.trim() && !beforeEndsWithBreak) {
          beforeSeparator = '\n\n';
        }

        // Add separator after only if after has content and doesn't already start with breaks
        if (after.trim() && !afterStartsWithBreak) {
          afterSeparator = '\n\n';
        }

        newMarkdown = `${before}${beforeSeparator}${action.payload.content}${afterSeparator}${after}`.trim();
      } else {
        newMarkdown = generateReadmeMarkdown(newWidgets);
      }

      return {
        widgets: newWidgets,
        currentMarkdown: newMarkdown,
        isManualEdit: state.isManualEdit,
        saveStatus: state.saveStatus,
        lastSavedAt: state.lastSavedAt,
        cursorPosition: state.cursorPosition,
      };
    }

    case 'CLEAR_ALL':
      return initialState;

    case 'UPDATE_MARKDOWN':
      return {
        ...state,
        currentMarkdown: action.payload,
        isManualEdit: true,
      };

    case 'SET_SAVE_STATUS':
      return {
        ...state,
        saveStatus: action.payload.status,
        lastSavedAt: action.payload.status === 'saved' ?
        (action.payload.time ?? Date.now())
        :
        state.lastSavedAt,
      };

    case 'SET_CURSOR_POSITION':
      return {
        ...state,
        cursorPosition: action.payload,
      };

    default:
      return state;
  }
}

// Create context
const ReadmeContext = createContext<ReadmeContextType | undefined>(undefined);

// Provider component
interface ReadmeProviderProps {
  children: ReactNode;
}

export const ReadmeProvider = ({ children }: ReadmeProviderProps) => {
  // Initialize reducer with lazy initializer that loads from localStorage
  const [state, dispatch] = useReducer(readmeReducer, initialState, () => {
    try {
      const saved = localStorage.getItem('readme-storage');
      if (saved) {
        return JSON.parse(saved) as ReadmeState;
      }
    } catch (error) {
      console.error('Failed to load saved state:', error);
    }
    return initialState;
  });

  // Save state to localStorage as before
  useEffect(() => {
    try {
      localStorage.setItem('readme-storage', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save state:', error);
    }
  }, [state]);

  // debounce timer ref for "saving" -> "saved"
  const saveTimer = useRef<number | null>(null);
  const SAVE_DEBOUNCE_MS = 800;

  // centralized trigger to mark saving and debounce to saved
  const triggerSave = () => {
    // mark saving immediately
    dispatch({ type: 'SET_SAVE_STATUS', payload: { status: 'saving' } });

    // debounce setting to saved
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
    }
    saveTimer.current = window.setTimeout(() => {
      dispatch({ type: 'SET_SAVE_STATUS', payload: { status: 'saved',
        time: Date.now() }
      });
      saveTimer.current = null;
    }, SAVE_DEBOUNCE_MS);
  };

  // Action creators
  const addWidget = (widget: ReadmeWidget) => {
    dispatch({ type: 'ADD_WIDGET', payload: widget });
    triggerSave();
  };

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  const updateMarkdown = (markdown: string) => {
    dispatch({ type: 'UPDATE_MARKDOWN', payload: markdown });
    triggerSave();
  };

  const setCursorPosition = (position: number) => {
    dispatch({ type: 'SET_CURSOR_POSITION', payload: position });
  };

  // optional: clear timer on unmount
  useEffect(() => {
    return () => {
      if (saveTimer.current) {
        clearTimeout(saveTimer.current);
      }
    };
  }, []);

  const contextValue: ReadmeContextType = {
    state,
    addWidget,
    clearAll,
    updateMarkdown,
    setCursorPosition,
    isManualEdit: state.isManualEdit,
    saveStatus: state.saveStatus,
    lastSavedAt: state.lastSavedAt,
  };

  return (
    <ReadmeContext.Provider value={contextValue}>
      {children}
    </ReadmeContext.Provider>
  );
};

// Custom hook to use the context
export const useReadmeContext = (): ReadmeContextType => {
  const context = useContext(ReadmeContext);
  if (context === undefined) {
    throw new Error('useReadmeContext must be used within a ReadmeProvider');
  }
  return context;
};

// Convenience hooks for specific parts of the state
export const useReadmeWidgets = () => {
  const {
    state,
    addWidget,
    clearAll
  } = useReadmeContext();

  return {
    widgets: state.widgets,
    addWidget,
    clearAll,
  };
};

// Hook for markdown operations
export const useReadmeMarkdown = () => {
  const { state, updateMarkdown, setCursorPosition } = useReadmeContext();

  const lastSavedAtFormatted = state.lastSavedAt
    ? new Date(state.lastSavedAt).toLocaleTimeString(undefined, { hour: 'numeric',
      minute: '2-digit', hour12: true })
    : null;

  return {
    markdown: state.currentMarkdown,
    updateMarkdown,
    setCursorPosition,
    saveStatus: state.saveStatus,
    lastSavedAt: state.lastSavedAt,
    lastSavedAtFormatted,
  };
};