'use client';

// import { useId } from 'react';
import { WIDGET_TYPES, ReadmeWidget } from '@/lib/types';
import { useReadmeWidgets } from '@/lib/readme-context';
import { motion } from 'motion/react';

interface WidgetCreatorProps {
  type: string;
}

interface ItemType {
  label: string;
  value: string;
}

const createWidgetContent = (type: string): string => {
  switch (type) {
    case 'title':
      return `# Project title\n\nProject description`;

    case 'heading':
      return `## Section Header`;

    case 'subheading':
      return `### Subheader`;

    case 'text':
      return 'Text content';

    case 'list':
      const items = ['Item 1', 'Item 2', 'Item 3'];
      return items.map((item: string) => `- ${item}`).join('\n');

    case 'code':
      return `\`\`\`javascript\n// Your code here\n\`\`\``;

    case 'quote':
      return `> Your quote here.`;

    case 'installation':
      return `\`\`\`bash\nnpm install your-package-name\n\`\`\``;

    case 'table':
      return [
        '| Header 1 | Header 2 | Header 3 |',
        '|----------|----------|----------|',
        '| Cell 1   | Cell 2   | Cell 3   |',
        '| Cell 4   | Cell 5   | Cell 6   |'
      ].join('\n');

    case 'tasklist':
    return `- [ ] Task 1\n- [x] Task 2\n- [ ] Task 3`;

    case 'changelog':
      return `### [1.0.0] - YYYY-MM-DD\n#### Added\n- Initial release.`;

    case 'license':
      return `This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.`;

    case 'image':
      return `![Image](https://via.placeholder.com/400)`;

    case 'video':
      return `[![Video]('https://via.placeholder.com/400')]('#')`;

    case 'stats':
      return `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=dark)`;

    case 'trophy':
      return `![Trophy](https://github-profile-trophy.vercel.app/?username=yourusername&theme=onedark)`;

    case 'streak':
      return `![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=yourusername&theme=dark)`;

    case 'mostUsedLanguages':
      return `![Most Used Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=dark)`;

    case 'badge':
      return '![Badge](https://img.shields.io/badge/Example-badge-blue)';

    case 'skills':
      return `![javascript](https://img.shields.io/badge/javascript-%23121011.svg?style=for-the-badge&logo=javascript)
      ![react](https://img.shields.io/badge/react-%23121011.svg?style=for-the-badge&logo=react)
      ![github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github)`;

    case 'link':
      return '[link title](https://example.com)';

    case 'contact':
      const contactInfo = [
        { label: 'Email', value: 'test@gmail.com'},
        { label: 'Phone', value: '+8801998770210' }
      ];
      return contactInfo.map((item: ItemType) => `- [${item.label}](${item.value})`)
      .join('\n');

    case 'hr':
      return '---';

    default:
      return `<!-- Widget: ${type} -->`;
  }
};

export default function WidgetCreator({ type }: WidgetCreatorProps) {
  // const id = useId();
  const { addWidget } = useReadmeWidgets();

  const handleClick = () => {
    const widget: ReadmeWidget = {
      id: `${type}-${Date.now()}`,
      type,
      content: createWidgetContent(type)
    };
    addWidget(widget);
  };

  const widgetType = WIDGET_TYPES.find(w => w.id === type);
  if (!widgetType) return null;

  const Icon = widgetType.icon;

  return (
    <motion.button
      id='widgetCreator'
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.0 }}
      className="py-5 px-3 group flex flex-col items-center gap-3
      rounded cursor-pointer bg-widget-bg-light dark:bg-widget-bg-dark"
    >
      <span className="h-auto w-auto">
        <Icon
          size={25}
          className='text-blue-600 group-hover:text-blue-700
          transition-colors duration-300'
        />
      </span>
      <div className="h-auto w-full text-center">
        <h3 className="text-base font-workSans font-medium text-gray-800
          dark:text-gray-200 group-hover:text-blue-700!
          dark:group-hover:text-blue-700! transition-colors
          duration-300"
        >
          {widgetType.name}
        </h3>
      </div>
    </motion.button>
  );
}
