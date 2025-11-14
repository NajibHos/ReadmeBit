'use client';

// import { useId } from 'react';
import { WIDGET_TYPES, ReadmeWidget } from '@/lib/types';
import { useReadmeWidgets } from '@/lib/readme-context';

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
      return `# Project Title\n\nProject description goes here.`;

    case 'heading':
      return `## Section Header`;

    case 'subheading':
      return `### Subheader`;

    case 'text':
      return 'Your text content here.';

    case 'list':
      const items = ['Item 1', 'Item 2', 'Item 3'];
      return items.map((item: string) => `- ${item}`).join('\n');

    case 'code':
      return `\`\`\`javascript\n// Your code here\n\`\`\``;

    case 'quote':
      return `> Your quote here.`;

    case 'installation':
      return `\`\`\`bash\nnpm install your-package-name\n\`\`\``;

    // case 'table':
    //   return [
    //     '| Header 1 | Header 2 | Header 3 |',
    //     '|----------|----------|----------|',
    //     '| Cell 1   | Cell 2   | Cell 3   |',
    //     '| Cell 4   | Cell 5   | Cell 6   |'
    //   ].join('\n');

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

    case 'badges':
      return '![Badge](https://img.shields.io/badge/Example-badge-blue)';

    case 'skills':
      return `// edit skills as your need
      ![javascript](https://img.shields.io/badge/javascript-%23121011.svg?style=for-the-badge&logo=javascript)
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
    <button
      id='widgetCreator'
      onClick={handleClick}
      className="h-auto w-full py-5 px-3 flex flex-col items-center gap-3
      border-2 border-transparent hover:border-blue-700 rounded transition-colors
      cursor-pointer bg-[#faf7f5] dark:bg-gray-900"
      // bg-[#0d1117] border-transparent
    >
      <span className="h-auto w-auto">
        <Icon size={25} className='text-blue-700' />
      </span>
      <div className="h-auto w-full text-center">
        <h3 className="text-subheading">
          {widgetType.name}
        </h3>
      </div>
    </button>
  );
}
