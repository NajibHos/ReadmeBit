import {
  LucideIcon,
  Heading,
  Heading2,
  Heading3,
  Image,
  Link,
  Shield,
  Type,
  List,
  Code,
  Quote,
  Play,
  TrendingUp,
  Flame,
  Zap,
  Award,
  AtSign,
  Minus,
  Code2,
  ArrowDown,
  Table,
  PenSquare,
  Scale,
  ListTodo,
  FileStack
} from 'lucide-react';

export interface ReadmeWidget {
  id: string;
  type: string;
  content: string;
  // config: Record<string, any>;
  // track widget position
  // position?: number;
}

export interface WidgetType {
  id: string;
  name: string;
  icon: string | LucideIcon;
  category?: 'header' | 'content' | 'media' | 'stats' | 'badges' | 'social';
}

export const WIDGET_TYPES: WidgetType[] = [
  // Headers
  {
    id: 'title',
    name: 'Title',
    icon: Heading,
    category: 'header',
  },
  {
    id: 'heading',
    name: 'Heading',
    icon: Heading2,
    category: 'header',
  },
  {
    id: 'subheading',
    name: 'Subheading',
    icon: Heading3,
    category: 'header',
  },

  // Content
  {
    id: 'text',
    name: 'Text',
    icon: Type,
    category: 'content',
  },
  {
    id: 'list',
    name: 'List',
    icon: List,
    category: 'content',
  },
  {
    id: 'code',
    name: 'Code Block',
    icon: Code,
    category: 'content',
  },
  {
    id: 'quote',
    name: 'Quote',
    icon: Quote,
    category: 'content',
  },
  {
    id: 'installation',
    name: 'Installation',
    icon: ArrowDown,
    category: 'content',
  },
  {
    id: 'table',
    name: 'Table',
    icon: Table,
    category: 'content',
  },
  {
    id: 'tasklist',
    name: 'Tasklist',
    icon: ListTodo,
    category: 'content',
  },
  {
    id: 'changelog',
    name: 'Changelog',
    icon: PenSquare,
    category: 'content',
  },
  {
    id: 'license',
    name: 'License',
    icon: Scale,
    category: 'content',
  },

  // Media
  {
    id: 'image',
    name: 'Image',
    icon: Image,
    category: 'media',
  },
  {
    id: 'video',
    name: 'Video',
    icon: Play,
    category: 'media',
  },

  // Stats
  {
    id: 'stats',
    name: 'Statistics',
    icon: TrendingUp,
    category: 'stats',
  },
  {
    id: 'trophy',
    name: 'Trophy',
    icon: Award,
    category: 'stats',
  },
  {
    id: 'streak',
    name: 'Streak',
    icon: Flame,
    category: 'stats',
  },
  {
    id: 'mostUsedLanguages',
    name: 'Most Used Languages',
    icon: Code2,
    category: 'stats',
  },

  // Badges
  {
    id: 'badge',
    name: 'Badge',
    icon: Shield,
    category: 'badges',
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: Zap,
    category: 'badges',
  },

  // Social
  {
    id: 'link',
    name: 'Link',
    icon: Link,
    category: 'social',
  },
  {
    id: 'contact',
    name: 'Contact',
    icon: AtSign,
    category: 'social',
  },
  {
    id: 'hr',
    name: 'Horizontal Rule',
    icon: Minus,
  },
];
