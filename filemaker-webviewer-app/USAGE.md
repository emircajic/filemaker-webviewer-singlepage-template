# FileMaker WebViewer Template - Usage Guide

## Overview

This template provides everything you need to build FileMaker WebViewer applications with modern web technologies.

## Creating New Projects

### Interactive Mode (Recommended)

```bash
npm run create
```

The script will ask you:
1. **Project name** - e.g., `customer-portal`
2. **Project description** - e.g., `Customer portal for FileMaker`
3. **Author name** - Your name (optional)

Example session:
```
🚀 FileMaker WebViewer Project Generator

Project name (e.g., my-filemaker-app): customer-portal
Project description: Customer portal for FileMaker
Author name (optional): John Doe

📁 Creating project in: /path/to/customer-portal

✅ Copied src
✅ Copied index.html
✅ Copied vite.config.js
✅ Copied postcss.config.js
✅ Copied tailwind.config.js
✅ Copied .gitignore
✅ Created package.json
✅ Created README.md
✅ Created .gitignore

✨ Project created successfully!

Next steps:
  cd customer-portal
  npm install
  npm run dev
```

### Manual Mode

If you prefer to copy manually:

```bash
# Copy the entire template directory
cp -r filemaker-webviewer-app my-new-project

# Navigate to the new project
cd my-new-project

# Update package.json manually
# - Change "name" field
# - Update "description" field
# - Add "author" field

# Install dependencies
npm install

# Start development
npm run dev
```

## Template Files

### Files That Will Be Copied

✅ **Copied to new projects:**
- `src/` - All source files
- `index.html` - HTML template
- `vite.config.js` - Vite configuration
- `postcss.config.js` - PostCSS configuration
- `tailwind.config.js` - Tailwind configuration
- `.gitignore` - Git ignore rules

✅ **Generated for new projects:**
- `package.json` - Custom for each project
- `README.md` - Custom for each project

❌ **Not copied (template-specific):**
- `node_modules/` - Will be installed via npm
- `dist/` - Will be generated on build
- `create-project.js` - Template generator
- `TEMPLATE.md` - Template documentation
- `QUICKSTART.md` - Quick start guide
- `USAGE.md` - This file

## Development Workflow

### 1. Create Project
```bash
npm run create
```

### 2. Install Dependencies
```bash
cd your-project-name
npm install
```

### 3. Start Development
```bash
npm run dev
```

### 4. Customize
- Edit `src/js/mock-data.json` for test data
- Modify `index.html` for UI
- Update `src/js/main.js` for logic
- Add styles in `src/styles/main.css`

### 5. Test
- Use Mock FileMaker Controls panel
- Send test data
- Call mock scripts
- Verify behavior

### 6. Build
```bash
npm run build
```

### 7. Deploy
- Copy `dist/index.html` to FileMaker
- Set up WebViewer
- Test in FileMaker

## Multiple Projects

You can create as many projects as you need from this template:

```bash
# Project 1
npm run create
# Enter: customer-portal

# Project 2
npm run create
# Enter: inventory-dashboard

# Project 3
npm run create
# Enter: reporting-tool
```

Each project will be independent with its own:
- Dependencies
- Configuration
- Source code
- Build output

## Updating the Template

To update the template itself (not individual projects):

1. Make changes to files in this directory
2. Test with `npm run dev`
3. Build with `npm run build`
4. New projects will use the updated template

## Best Practices

### 1. Keep Template Clean
- Don't add project-specific code to the template
- Keep mock data generic
- Document any template changes

### 2. Version Control
```bash
# Initialize git in new projects
cd your-project
git init
git add .
git commit -m "Initial commit from template"
```

### 3. Customize Per Project
- Update mock data for each project's needs
- Modify UI to match project requirements
- Add project-specific scripts

### 4. Share Template Updates
- If you improve the template, update this directory
- All new projects will benefit from improvements
- Existing projects can manually merge updates

## Directory Structure After Creation

```
your-project-name/
├── src/
│   ├── js/
│   │   ├── main.js
│   │   ├── mock-filemaker.js
│   │   ├── dev-controls.js
│   │   └── mock-data.json
│   └── styles/
│       └── main.css
├── index.html
├── package.json          # Custom for your project
├── README.md            # Custom for your project
├── .gitignore
├── vite.config.js
├── postcss.config.js
└── tailwind.config.js
```

## Troubleshooting

### "Directory already exists" error
- Choose a different project name
- Or delete the existing directory first

### Generator script fails
- Ensure you're in the template directory
- Check that Node.js is installed
- Try manual copy method instead

### Dependencies not installing
- Check internet connection
- Try `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then retry

## Support

- **Template docs**: `TEMPLATE.md`
- **Quick start**: `QUICKSTART.md`
- **Full README**: `README.md`
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vite**: https://vitejs.dev/guide/

---

**Ready to create your first project?** Run `npm run create` now! 🚀
