# Quick Start Guide

## Create a New Project in 3 Steps

### Step 1: Generate Project

```bash
npm run create
```

Answer the prompts:
- **Project name**: `my-filemaker-app`
- **Description**: `My awesome FileMaker app`
- **Author**: `Your Name`

### Step 2: Install & Run

```bash
cd my-filemaker-app
npm install
npm run dev
```

### Step 3: Start Building

Your browser will open with:
- ✅ Live development server
- ✅ Mock FileMaker controls (bottom-right)
- ✅ Test buttons and data display
- ✅ Hot reload enabled

## What's Included

### Mock FileMaker Environment
- **Send Data**: Test receiving data from FileMaker
- **Call Scripts**: Test calling FileMaker scripts
- **View Logs**: See all script activity

### Pre-configured Files
- `src/js/main.js` - Your app logic
- `src/js/mock-data.json` - Test data (edit this!)
- `index.html` - Your UI
- `src/styles/main.css` - Custom styles

## Common Tasks

### Add Your Test Data
Edit `src/js/mock-data.json`:
```json
{
  "myData": [
    { "id": 1, "name": "Test" }
  ]
}
```

### Update the UI
Edit `index.html` with Tailwind CSS classes:
```html
<div class="bg-blue-500 text-white p-4">
  Hello FileMaker!
</div>
```

### Handle FileMaker Data
Edit `src/js/main.js`:
```javascript
function handleFileMakerData(data) {
  console.log('Got data:', data);
  // Your logic here
}
```

### Build for FileMaker
```bash
npm run build
```
Output: `dist/index.html` (single file, ready to embed)

## Testing Flow

1. **Start dev server**: `npm run dev`
2. **Use mock controls**: Send test data, call scripts
3. **Check data display**: See data in the UI
4. **View console**: Check logs and errors
5. **Iterate**: Make changes, see them instantly

## Deploy to FileMaker

1. Build: `npm run build`
2. Copy: `dist/index.html` content
3. FileMaker: Set WebViewer to data URL or file path

## Need Help?

- **Full docs**: See `README.md`
- **Template guide**: See `TEMPLATE.md`
- **Customization**: Check Tailwind CSS docs

---

**That's it! You're ready to build FileMaker WebViewer apps.** 🚀
