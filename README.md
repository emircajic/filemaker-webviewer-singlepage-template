# FileMaker WebViewer Template

A project template for building FileMaker WebViewer applications with Vite, PostCSS, and Tailwind CSS.

> 📚 **New here?** Check the [Documentation Index](INDEX.md) or jump to [Quick Start](QUICKSTART.md)

## Features

- ✅ **Single HTML file** - All CSS and JavaScript inlined for easy embedding
- ✅ **Tailwind CSS v4** - Modern utility-first CSS framework
- ✅ **Vite** - Fast development and optimized production builds
- ✅ **FileMaker Integration** - Pre-configured communication functions
- ✅ **Mock FileMaker Environment** - Test with sample data before deploying
- ✅ **Project Generator** - Create new projects from this template

## Creating a New Project from Template

### Option 1: Using the Generator Script

```bash
# From this template directory
npm run create
```

This will prompt you for:
- Project name
- Project description
- Author name

The script will create a new directory with all necessary files.

### Option 2: Manual Copy

```bash
# Copy the template to a new directory
cp -r filemaker-webviewer-app my-new-project
cd my-new-project

# Install dependencies
npm install

# Start developing
npm run dev
```

## Getting Started (This Template)

### Installation

```bash
npm install
```

### Development

Run the development server with hot reload:

```bash
npm run dev
```

The app will open at `http://localhost:5173/`

### Build for Production

Build a single, self-contained HTML file:

```bash
npm run build
```

The output will be in `dist/index.html` - this file contains everything inlined and is ready to embed in FileMaker.

### Preview Production Build

```bash
npm run preview
```

## Using in FileMaker

### Method 1: Load from File

1. Build the project: `npm run build`
2. Copy `dist/index.html` to your FileMaker solution folder
3. In FileMaker, use the WebViewer with: `"file://" & Get(FilePath) & "index.html"`

### Method 2: Load from Variable

1. Build the project: `npm run build`
2. Copy the contents of `dist/index.html`
3. Store it in a FileMaker field or variable
4. Set WebViewer to: `"data:text/html;charset=utf-8," & YourHTMLVariable`

### Method 3: Load from URL

1. Host the `dist/index.html` file on a web server
2. Set WebViewer to the URL

## Mock FileMaker Environment (Development)

When running in development mode (`npm run dev`), the app includes a **Mock FileMaker Environment** that allows you to test the integration without FileMaker.

### Features

- 🎮 **Interactive Controls Panel** - Appears in the bottom-right corner during development
- 📤 **Send Data to App** - Simulate FileMaker sending data to the WebViewer
- 📞 **Call Scripts** - Test calling FileMaker scripts with parameters
- 📝 **Script Log** - View all script calls and responses
- 🔧 **Customizable Mock Data** - Edit `src/js/mock-data.json` to add your own test data

### Using the Mock Controls

1. Run `npm run dev`
2. Look for the **Mock FileMaker Controls** panel in the bottom-right
3. Use the dropdown to select data to send (users, records, etc.)
4. Click "Send to App" to simulate FileMaker sending data
5. Use the script section to test calling FileMaker scripts
6. Watch the console and script log for activity

### Customizing Mock Data

Edit `src/js/mock-data.json` to add your own test data in JSON format:

```json
{
  "users": [...],
  "records": [...],
  "yourCustomData": {...}
}
```

### Console Helpers

In development mode, you can use these helpers in the browser console:

```javascript
// Send custom data to the app
window.mockFileMaker.sendData({ your: 'data' })

// Get all mock data
window.mockFileMaker.getData()

// View script call log
window.mockFileMaker.getLog()

// Clear the log
window.mockFileMaker.clearLog()

// Set a custom response for a script
window.mockFileMaker.setResponse('MyScript', { result: 'success' })
```

## FileMaker Integration (Production)

### Sending Data from FileMaker to WebViewer

Use the `Perform JavaScript in Web Viewer` script step:

```javascript
window.receiveFromFileMaker({ name: "John", id: 123 })
```

### Calling FileMaker Scripts from WebViewer

The app includes a `window.FileMaker.PerformScript` function. In your JavaScript:

```javascript
window.FileMaker.PerformScript('MyScriptName', 'parameter data')
```

Then in FileMaker, you can intercept this using the `OnWebViewerURLChange` script trigger.

## Project Structure

```
filemaker-webviewer-app/
├── dist/                  # Built files (generated)
│   └── index.html        # Single file output for FileMaker
├── src/
│   ├── js/
│   │   └── main.js       # Main JavaScript file
│   └── styles/
│       └── main.css      # Main CSS with Tailwind
├── index.html            # Source HTML template
├── vite.config.js        # Vite configuration
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Modify the UI

Edit `index.html` to change the structure and content. All Tailwind utility classes are available.

### Add Custom Styles

Add your custom CSS in `src/styles/main.css`

### Add Custom JavaScript

Add your JavaScript logic in `src/js/main.js`

### Configure Tailwind

Modify `tailwind.config.js` to customize colors, fonts, spacing, etc.

## Tips for FileMaker WebViewer

1. **Keep it lightweight** - The entire app is in one file, so avoid large assets
2. **Test in FileMaker** - WebViewer behavior can differ from browsers
3. **Use relative units** - The WebViewer size may vary
4. **Handle errors gracefully** - FileMaker's JavaScript engine may have limitations
5. **Security** - Be careful with user input and data validation

## License

MIT
