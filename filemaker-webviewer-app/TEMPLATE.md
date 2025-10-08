# Using This Template

This is a template for creating FileMaker WebViewer applications. Follow these steps to create a new project.

## Quick Start

### Method 1: Automated Project Creation (Recommended)

```bash
npm run create
```

This will:
1. Ask for your project details (name, description, author)
2. Create a new directory with all template files
3. Generate a custom `package.json` and `README.md`
4. Set up the project structure

Then:
```bash
cd your-project-name
npm install
npm run dev
```

### Method 2: Manual Setup

1. **Copy the template:**
   ```bash
   cp -r filemaker-webviewer-app my-project-name
   cd my-project-name
   ```

2. **Update `package.json`:**
   - Change `name` to your project name
   - Update `description`
   - Add your `author` name

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start developing:**
   ```bash
   npm run dev
   ```

## Template Structure

```
filemaker-webviewer-app/
├── src/
│   ├── js/
│   │   ├── main.js              # Your main application logic
│   │   ├── mock-filemaker.js    # Mock FileMaker (dev only)
│   │   ├── dev-controls.js      # Dev UI controls (dev only)
│   │   └── mock-data.json       # Test data (customize this!)
│   └── styles/
│       └── main.css             # Main CSS file
├── index.html                   # HTML template
├── vite.config.js              # Vite configuration
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind configuration
├── create-project.js           # Project generator script
└── package.json                # Dependencies
```

## Customization Guide

### 1. Update Mock Data

Edit `src/js/mock-data.json` with your own test data structure:

```json
{
  "yourData": {
    "field1": "value1",
    "field2": "value2"
  }
}
```

### 2. Modify the UI

Edit `index.html` and use Tailwind CSS utility classes:

```html
<div class="bg-blue-500 text-white p-4 rounded">
  Your content here
</div>
```

### 3. Add Application Logic

Edit `src/js/main.js`:

```javascript
// Handle data from FileMaker
function handleFileMakerData(data) {
  // Your custom logic here
}

// Call FileMaker scripts
window.FileMaker.PerformScript('YourScript', { param: 'value' });
```

### 4. Add Custom Styles

Edit `src/styles/main.css`:

```css
/* Your custom CSS */
.my-custom-class {
  /* styles */
}
```

### 5. Configure Tailwind

Edit `tailwind.config.js` to customize colors, fonts, etc.:

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand': '#your-color',
      },
    },
  },
}
```

## Development Workflow

### 1. Development Mode

```bash
npm run dev
```

- Opens at `http://localhost:5173/`
- Hot reload enabled
- Mock FileMaker controls visible
- Console helpers available

### 2. Testing with Mock Data

Use the **Mock FileMaker Controls** panel (bottom-right):
- Send test data to your app
- Call mock scripts
- View script logs

Or use console helpers:
```javascript
window.mockFileMaker.sendData({ your: 'data' })
window.mockFileMaker.getData()
```

### 3. Build for Production

```bash
npm run build
```

Creates `dist/index.html` - a single file with everything inlined.

### 4. Deploy to FileMaker

1. Copy `dist/index.html` content
2. In FileMaker, set WebViewer to:
   - File path: `"file://" & Get(FilePath) & "index.html"`
   - Or data URL: `"data:text/html;charset=utf-8," & YourHTMLField`

## FileMaker Integration

### Receive Data from FileMaker

FileMaker script step: **Perform JavaScript in Web Viewer**

```javascript
window.receiveFromFileMaker({ 
  recordId: 123,
  name: "John Doe",
  data: {...}
})
```

### Call FileMaker Scripts

From your JavaScript:

```javascript
window.FileMaker.PerformScript('GetRecords', { 
  filter: 'active',
  limit: 10 
})
```

In FileMaker, use **OnWebViewerURLChange** script trigger to intercept.

## Tips

1. **Keep it simple** - The entire app is in one HTML file
2. **Test thoroughly** - Use mock environment before deploying
3. **Use JSON** - Standard format for data exchange
4. **Handle errors** - FileMaker's JS engine has limitations
5. **Version control** - Keep your template updated

## Common Customizations

### Add a New Mock Script Response

Edit `src/js/mock-filemaker.js`:

```javascript
this.mockResponses = {
  'YourNewScript': { success: true, data: [...] },
  // ... other scripts
};
```

### Add New Test Data

Edit `src/js/mock-data.json`:

```json
{
  "newDataType": [
    { "id": 1, "name": "Item 1" }
  ]
}
```

### Change App Title

Edit `index.html`:

```html
<title>Your App Name</title>
<h1>Your App Name</h1>
```

## Troubleshooting

### Build fails
- Run `npm install` to ensure dependencies are installed
- Check for syntax errors in your code

### Mock controls not showing
- Ensure you're running `npm run dev` (not build)
- Check browser console for errors

### Data not displaying
- Check `handleFileMakerData()` function in `main.js`
- Verify data structure matches your expectations
- Use browser DevTools to debug

## Next Steps

1. Customize `mock-data.json` with your data structure
2. Update `index.html` with your UI
3. Implement your logic in `main.js`
4. Test with mock environment
5. Build and deploy to FileMaker

Happy coding! 🚀
