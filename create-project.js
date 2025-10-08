#!/usr/bin/env node

/**
 * FileMaker WebViewer Project Generator
 * Creates a new project from this template
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n🚀 FileMaker WebViewer Project Generator\n');
  
  const projectName = await question('Project name (e.g., my-filemaker-app): ');
  const projectDescription = await question('Project description: ');
  const author = await question('Author name (optional): ');
  
  if (!projectName) {
    console.error('❌ Project name is required!');
    rl.close();
    process.exit(1);
  }
  
  const targetDir = path.join(process.cwd(), projectName);
  
  // Check if directory already exists
  if (fs.existsSync(targetDir)) {
    console.error(`❌ Directory "${projectName}" already exists!`);
    rl.close();
    process.exit(1);
  }
  
  console.log(`\n📁 Creating project in: ${targetDir}\n`);
  
  // Create project directory
  fs.mkdirSync(targetDir, { recursive: true });
  
  // Files and directories to copy
  const itemsToCopy = [
    'src',
    'index.html',
    'vite.config.js',
    'postcss.config.js',
    'tailwind.config.js',
    '.gitignore'
  ];
  
  // Copy files
  for (const item of itemsToCopy) {
    const sourcePath = path.join(__dirname, item);
    const targetPath = path.join(targetDir, item);
    
    if (fs.existsSync(sourcePath)) {
      copyRecursive(sourcePath, targetPath);
      console.log(`✅ Copied ${item}`);
    }
  }
  
  // Create custom package.json
  const packageJson = {
    name: projectName,
    private: true,
    version: '1.0.0',
    type: 'module',
    description: projectDescription || 'A FileMaker WebViewer application',
    author: author || '',
    license: 'MIT',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview'
    },
    keywords: ['filemaker', 'webviewer', 'vite', 'tailwind', 'postcss'],
    devDependencies: {
      '@tailwindcss/postcss': '^4.1.14',
      autoprefixer: '^10.4.21',
      postcss: '^8.5.6',
      tailwindcss: '^4.1.14',
      vite: '^7.1.9',
      'vite-plugin-singlefile': '^2.3.0'
    }
  };
  
  fs.writeFileSync(
    path.join(targetDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  console.log('✅ Created package.json');
  
  // Create README
  const readme = `# ${projectName}

${projectDescription || 'A FileMaker WebViewer application built with Vite, PostCSS, and Tailwind CSS.'}

## Quick Start

\`\`\`bash
# Install dependencies
npm install

# Start development server with mock FileMaker environment
npm run dev

# Build for production (creates single HTML file)
npm run build
\`\`\`

## Development

The development server includes a **Mock FileMaker Environment** for testing:
- Interactive controls panel in the bottom-right corner
- Send test data to the app
- Call mock FileMaker scripts
- View script execution logs

## Production Build

Run \`npm run build\` to create a single, self-contained HTML file in \`dist/index.html\`.

This file contains all CSS and JavaScript inlined and is ready to embed in FileMaker WebViewer.

## FileMaker Integration

### Send Data from FileMaker to WebViewer

\`\`\`javascript
window.receiveFromFileMaker({ your: 'data' })
\`\`\`

### Call FileMaker Scripts from WebViewer

\`\`\`javascript
window.FileMaker.PerformScript('ScriptName', { param: 'value' })
\`\`\`

## Customization

- **UI**: Edit \`index.html\` and use Tailwind CSS classes
- **Styles**: Add custom CSS in \`src/styles/main.css\`
- **Logic**: Add JavaScript in \`src/js/main.js\`
- **Mock Data**: Edit \`src/js/mock-data.json\` for testing

## Project Structure

\`\`\`
${projectName}/
├── dist/              # Built files (generated)
├── src/
│   ├── js/
│   │   ├── main.js           # Main application logic
│   │   ├── mock-filemaker.js # Mock FileMaker environment
│   │   ├── dev-controls.js   # Development UI controls
│   │   └── mock-data.json    # Test data
│   └── styles/
│       └── main.css          # Main CSS file
├── index.html         # HTML template
└── package.json       # Dependencies
\`\`\`

## License

MIT
`;
  
  fs.writeFileSync(path.join(targetDir, 'README.md'), readme);
  console.log('✅ Created README.md');
  
  // Create .gitignore if it doesn't exist
  if (!fs.existsSync(path.join(targetDir, '.gitignore'))) {
    const gitignore = `# Dependencies
node_modules/

# Build output
dist/

# Environment files
.env
.env.local

# Editor directories
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
`;
    fs.writeFileSync(path.join(targetDir, '.gitignore'), gitignore);
    console.log('✅ Created .gitignore');
  }
  
  console.log('\n✨ Project created successfully!\n');
  console.log('Next steps:');
  console.log(`  cd ${projectName}`);
  console.log('  npm install');
  console.log('  npm run dev\n');
  
  rl.close();
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src);
    
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

main().catch(err => {
  console.error('❌ Error:', err.message);
  rl.close();
  process.exit(1);
});
