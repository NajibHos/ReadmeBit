export interface Template {
  id: string;
  name: string;
  description: string;
  content: string;
}

export const templates: Template[] = [
  {
    id: 'github-profile',
    name: 'GitHub Profile README',
    description: 'A professional GitHub profile README with skills, stats, and contact info.',
    content: `# Hi, I'm [Your Name] \n I’m currently exploring new technologies, upgrading my skills, and seeking opportunities to grow at my web development career. My main focus is front-end development with React and Next.js, and I’m expanding into full-stack development to contribute, upgrade my skills, and future opportunities.

## About Me
- 🔭 I'm currently working on [Project Name]
- 🌱 I'm currently learning [Technology/Skill]
- 👯 I'm looking to collaborate on Open Source Projects
- 💬 Ask me about [Your Expertise]
- 📫 How to reach me: [Your Email]

## Skills
\`\`\`
Languages: JavaScript, TypeScript, Python, Java
Frontend: React, Next.js, TailwindCSS
Backend: Node.js, Express, PostgreSQL
Tools: Git, Docker, AWS
\`\`\`

## GitHub Stats
![Your GitHub stats](https://github-readme-stats.vercel.app/api?username=yourusername&show_icons=true&theme=dark)

## Top Languages
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=yourusername&layout=compact&theme=dark)

## Connect with Me
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](your-linkedin-url)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](your-twitter-url)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](your-portfolio-url)`
  },
  {
    id: 'project-readme',
    name: 'Project Documentation',
    description: 'Project documentation with installation, usage, and contribution guidelines.',
    content: `# Project Name

## Overview
Brief description of your project and its purpose.

## Features
- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

## Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/username/project-name.git

# Navigate to project directory
cd project-name

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

## Usage

\`\`\`javascript
// Example code showing how to use your project
import { YourLibrary } from 'your-library';

const instance = new YourLibrary();
instance.doSomething();
\`\`\`

## Configuration
Explain configuration options and environment variables:

\`\`\`env
API_KEY=your_api_key
DATABASE_URL=your_database_url
\`\`\`

## Contributing
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors
- Your Name - [GitHub](https://github.com/yourusername)`
  },
  {
    id: 'npm-package',
    name: 'NPM Package README',
    description: 'Documentation template for NPM packages with installation, API, and examples.',
    content: `# Package Name

[![npm version](https://badge.fury.io/js/package-name.svg)](https://badge.fury.io/js/package-name)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
A brief description of what this package does and why it's useful.

## Quick Start

### Installation

\`\`\`bash
npm install package-name
# or
yarn add package-name
\`\`\`

### Basic Usage

\`\`\`javascript
import { someFunction } from 'package-name';

// Example usage
const result = someFunction();
console.log(result);
\`\`\`

## API Reference

### someFunction(options)

\`\`\`javascript
someFunction({
  param1: 'value1',
  param2: 'value2'
});
\`\`\`

#### Options

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| param1 | string | Description of param1 | 'default' |
| param2 | number | Description of param2 | 0 |

## Examples

### Example 1: Basic Implementation
\`\`\`javascript
import { someFunction } from 'package-name';

// Your example code here
\`\`\`

### Example 2: Advanced Usage
\`\`\`javascript
import { someFunction } from 'package-name';

// Your advanced example code here
\`\`\`

## Contributing
Contributions, issues and feature requests are welcome!

## License
MIT © [Your Name]`
  }
];