'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode }
from 'react';
import { ReadmeWidget } from './types';

// Types
interface ReadmeState {
  widgets: ReadmeWidget[];
  currentMarkdown: string;
  // Track if user has manually edited the markdown
  isManualEdit: boolean;
}

// Context type
interface ReadmeContextType {
  state: ReadmeState;
  addWidget: (widget: ReadmeWidget) => void;
  clearAll: () => void;
  updateMarkdown: (markdown: string) => void;
  isManualEdit: boolean;
}

// Action types
type ReadmeAction =
  | { type: 'ADD_WIDGET'; payload: ReadmeWidget }
  | { type: 'CLEAR_ALL' }
  | { type: 'UPDATE_MARKDOWN'; payload: string }

// Helper function to generate markdown from widgets
const generateReadmeMarkdown = (widgets: ReadmeWidget[]): string => {
  return widgets.map((widget) => widget.content).join('\n\n');
};

// Initial state
const initialState: ReadmeState = {
  widgets: [],
  currentMarkdown: '',
  isManualEdit: false,
};

// Reducer with improved manual edit handling
// const readmeReducer = (state: ReadmeState, action: ReadmeAction): ReadmeState => {
//   switch (action.type) {
//     // add_widget action(previous version)
//     // case 'ADD_WIDGET': {
//     //   const newWidgets = [...state.widgets, action.payload];
//     //   return {
//     //     widgets: newWidgets,
//     //     // Append widget content to existing markdown when in manual edit mode
//     //     currentMarkdown: state.isManualEdit
//     //       ? `${state.currentMarkdown}\n\n${action.payload.content}`
//     //       : generateReadmeMarkdown(newWidgets),
//     //     isManualEdit: state.isManualEdit,
//     //   };
//     // }

//     case 'ADD_WIDGET': {
//       const newWidgets = [...state.widgets, action.payload];
//       const newContent = state.isManualEdit
//       ? `${state.currentMarkdown.trim()}\n\n${action.payload.content}`
//       : generateReadmeMarkdown(newWidgets);

//       return {
//         widgets: newWidgets,
//         currentMarkdown: newContent,
//         isManualEdit: state.isManualEdit,
//       };
//     }

//     case 'UPDATE_WIDGET': {
//       const newWidgets = state.widgets.map((widget) =>
//         widget.id === action.payload.id ? { ...widget, ...action.payload.updates } : widget
//       );
//       const updatedWidget = newWidgets.find(w => w.id === action.payload.id);

//       if (state.isManualEdit && updatedWidget) {
//         // Replace the old widget content with new content in markdown
//         const oldWidget = state.widgets.find(w => w.id === action.payload.id);
//         const updatedMarkdown = state.currentMarkdown.replace(
//           oldWidget?.content || '',
//           updatedWidget.content
//         );
//         return {
//           widgets: newWidgets,
//           currentMarkdown: updatedMarkdown,
//           isManualEdit: true,
//         };
//       }
//       return {
//         widgets: newWidgets,
//         currentMarkdown: generateReadmeMarkdown(newWidgets),
//         isManualEdit: state.isManualEdit,
//       };
//     }

//     case 'REMOVE_WIDGET': {
//       const removedWidget = state.widgets.find(w => w.id === action.payload);
//       const newWidgets = state.widgets.filter((widget) => widget.id !== action.payload);

//       if (state.isManualEdit && removedWidget) {
//         // Remove the widget content from markdown
//         const updatedMarkdown = state.currentMarkdown.replace(
//           removedWidget.content,
//           ''
//         ).replace(/\n{3,}/g, '\n\n').trim(); // Clean up extra newlines

//         return {
//           widgets: newWidgets,
//           currentMarkdown: updatedMarkdown,
//           isManualEdit: true,
//         };
//       }

//       return {
//         widgets: newWidgets,
//         currentMarkdown: generateReadmeMarkdown(newWidgets),
//         isManualEdit: state.isManualEdit,
//       };
//     }

//     case 'MOVE_WIDGET': {
//       const newWidgets = [...state.widgets];
//       const [movedWidget] = newWidgets.splice(action.payload.fromIndex, 1);
//       newWidgets.splice(action.payload.toIndex, 0, movedWidget);

//       return {
//         widgets: newWidgets,
//         currentMarkdown: state.isManualEdit
//           ? state.currentMarkdown
//           : generateReadmeMarkdown(newWidgets),
//         isManualEdit: state.isManualEdit,
//       };
//     }

//     case 'CLEAR_ALL':
//       return {
//         widgets: [],
//         currentMarkdown: '',
//         isManualEdit: false,
//       };

//     case 'UPDATE_MARKDOWN':
//       return {
//         ...state,
//         currentMarkdown: action.payload,
//         isManualEdit: true,
//       };

//     case 'SYNC_WIDGETS':
//       // Re-generate markdown from widgets and clear manual edit flag
//       return {
//         ...state,
//         currentMarkdown: generateReadmeMarkdown(state.widgets),
//         isManualEdit: false,
//       };

//     case 'RESET_MANUAL_EDIT':
//       return {
//         ...state,
//         isManualEdit: false,
//       };

//     case 'LOAD_STATE':
//       return action.payload;

//     default:
//       return state;
//   }
// };

const readmeReducer = (state: ReadmeState, action: ReadmeAction): ReadmeState => {
  switch (action.type) {
    case 'ADD_WIDGET': {
      const newWidgets = [...state.widgets, action.payload];
      return {
        widgets: newWidgets,
        currentMarkdown: state.isManualEdit
          ? `${state.currentMarkdown}\n\n${action.payload.content}`
          : generateReadmeMarkdown(newWidgets),
        isManualEdit: state.isManualEdit,
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

  useEffect(() => {
    try {
      localStorage.setItem('readme-storage', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save state:', error);
    }
  }, [state]);

  // Action creators
  const addWidget = (widget: ReadmeWidget) => {
    dispatch({ type: 'ADD_WIDGET', payload: widget });
  };

  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  const updateMarkdown = (markdown: string) => {
    dispatch({ type: 'UPDATE_MARKDOWN', payload: markdown });
  };

  const contextValue: ReadmeContextType = {
    state,
    addWidget,
    clearAll,
    updateMarkdown,
    isManualEdit: state.isManualEdit,
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
  const { state, updateMarkdown } = useReadmeContext();

  return {
    markdown: state.currentMarkdown,
    updateMarkdown,
  };
};
