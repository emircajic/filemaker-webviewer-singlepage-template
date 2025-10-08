# FileMaker WebViewer Template - Project Summary

## What Is This?

A **production-ready template** for building FileMaker WebViewer applications using modern web technologies.

## Key Features

### 🎯 Core Capabilities
- **Single HTML Output** - All CSS/JS inlined into one file
- **Vite Build System** - Fast development, optimized production builds
- **Tailwind CSS v4** - Modern utility-first styling
- **FileMaker Integration** - Pre-configured communication layer
- **Mock Environment** - Test without FileMaker during development

### 🚀 Template System
- **Project Generator** - Create new projects with one command
- **Reusable** - Launch multiple projects from the same template
- **Customizable** - Easy to modify for specific needs
- **Well-Documented** - Comprehensive guides included

## Quick Commands

```bash
# Create a new project from template
npm run create

# Develop this template
npm run dev

# Build this template
npm run build

# Preview production build
npm run preview
```

## File Structure

```
filemaker-webviewer-app/          # Template directory
├── 📄 Documentation
│   ├── README.md                 # Main documentation
│   ├── TEMPLATE.md               # Template usage guide
│   ├── QUICKSTART.md             # Quick start guide
│   ├── USAGE.md                  # Detailed usage instructions
│   └── PROJECT_SUMMARY.md        # This file
│
├── 🔧 Configuration
│   ├── package.json              # Dependencies & scripts
│   ├── vite.config.js            # Vite configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── tailwind.config.js        # Tailwind configuration
│   └── .gitignore                # Git ignore rules
│
├── 📝 Source Files
│   ├── index.html                # HTML template
│   └── src/
│       ├── js/
│       │   ├── main.js           # Main application logic
│       │   ├── mock-filemaker.js # Mock FileMaker environment
│       │   ├── dev-controls.js   # Development UI controls
│       │   └── mock-data.json    # Test data (JSON format)
│       └── styles/
│           └── main.css          # Main CSS file
│
├── 🛠️ Tools
│   └── create-project.js         # Project generator script
│
└── 📦 Generated (not in repo)
    ├── node_modules/             # Dependencies
    └── dist/                     # Build output
        └── index.html            # Single file for FileMaker
```

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Vite | ^7.1.9 | Build tool & dev server |
| Tailwind CSS | ^4.1.14 | Utility-first CSS framework |
| PostCSS | ^8.5.6 | CSS processing |
| Autoprefixer | ^10.4.21 | CSS vendor prefixing |
| @tailwindcss/postcss | ^4.1.14 | Tailwind v4 PostCSS plugin |
| vite-plugin-singlefile | ^2.3.0 | Inline all assets |

## Workflow Overview

### For Template Maintainers

1. **Maintain Template**
   - Update dependencies
   - Improve features
   - Fix bugs
   - Update documentation

2. **Test Template**
   ```bash
   npm run dev    # Test development mode
   npm run build  # Test production build
   ```

3. **Create Projects**
   ```bash
   npm run create  # Generate new projects
   ```

### For Project Developers

1. **Create Project**
   ```bash
   npm run create
   # Enter project details
   ```

2. **Develop**
   ```bash
   cd project-name
   npm install
   npm run dev
   ```

3. **Customize**
   - Edit `mock-data.json` for test data
   - Modify `index.html` for UI
   - Update `main.js` for logic

4. **Test**
   - Use Mock FileMaker Controls
   - Send test data
   - Call mock scripts

5. **Build & Deploy**
   ```bash
   npm run build
   # Copy dist/index.html to FileMaker
   ```

## Mock FileMaker Environment

### Development Features

**Interactive Controls Panel** (bottom-right in dev mode):
- 📤 Send data to app
- 📞 Call FileMaker scripts
- 📝 View script logs
- 🔧 Minimize/expand

**Console Helpers**:
```javascript
window.mockFileMaker.sendData({ data })
window.mockFileMaker.getData()
window.mockFileMaker.getLog()
window.mockFileMaker.clearLog()
window.mockFileMaker.setResponse(script, response)
```

**Test Data Format** (JSON):
```json
{
  "users": [...],
  "records": [...],
  "currentUser": {...}
}
```

### Production Behavior

Mock code is **automatically excluded** from production builds:
- Smaller bundle size
- No mock controls visible
- Real FileMaker integration only

## FileMaker Integration

### Send Data: FileMaker → WebViewer

FileMaker Script Step: **Perform JavaScript in Web Viewer**
```javascript
window.receiveFromFileMaker({ 
  recordId: 123,
  data: {...}
})
```

### Call Scripts: WebViewer → FileMaker

JavaScript in WebViewer:
```javascript
window.FileMaker.PerformScript('ScriptName', {
  param: 'value'
})
```

FileMaker: Use **OnWebViewerURLChange** trigger to intercept

## Use Cases

### Perfect For:
- ✅ Customer portals in FileMaker
- ✅ Interactive dashboards
- ✅ Data visualization tools
- ✅ Custom forms and interfaces
- ✅ Reporting interfaces
- ✅ Mobile-friendly FileMaker UIs

### Not Ideal For:
- ❌ Large file uploads (single HTML limitation)
- ❌ Complex multi-page applications
- ❌ Heavy media content
- ❌ Applications requiring external resources

## Project Examples

You can create multiple projects:

```bash
# Customer Portal
npm run create
# → customer-portal/

# Inventory Dashboard  
npm run create
# → inventory-dashboard/

# Reporting Tool
npm run create
# → reporting-tool/
```

Each is independent with its own:
- Dependencies
- Configuration
- Source code
- Build output

## Documentation Guide

| File | Purpose | Audience |
|------|---------|----------|
| `README.md` | Main documentation | Everyone |
| `QUICKSTART.md` | Get started fast | New users |
| `TEMPLATE.md` | Template customization | Template users |
| `USAGE.md` | Detailed usage | Project creators |
| `PROJECT_SUMMARY.md` | Overview (this file) | Decision makers |

## Maintenance

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install package@latest -D
```

### Testing After Updates

```bash
# Test development
npm run dev

# Test build
npm run build

# Test project creation
npm run create
```

## Benefits

### For Developers
- 🚀 Fast development with hot reload
- 🎨 Modern CSS with Tailwind
- 🧪 Test without FileMaker
- 📦 Single file output
- 🔄 Reusable template

### For Organizations
- 📈 Consistent project structure
- 🔧 Easy maintenance
- 👥 Team collaboration
- 📚 Well documented
- ⚡ Quick project launches

## Next Steps

### First Time?
1. Read `QUICKSTART.md`
2. Run `npm run create`
3. Follow the prompts
4. Start building!

### Need Details?
- Template usage: `TEMPLATE.md`
- Full documentation: `README.md`
- Detailed usage: `USAGE.md`

### Ready to Build?
```bash
npm run create
```

---

**Template Version**: 1.0.0  
**Last Updated**: October 2025  
**License**: MIT
