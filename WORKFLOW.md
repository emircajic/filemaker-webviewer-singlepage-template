# Development Workflow

## Complete Workflow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    TEMPLATE REPOSITORY                       │
│                 filemaker-webviewer-app/                     │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ npm run create
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    NEW PROJECT CREATED                       │
│                    your-project-name/                        │
│  ✓ Source files copied                                       │
│  ✓ package.json generated                                    │
│  ✓ README.md generated                                       │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ cd your-project-name
                            │ npm install
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  DEPENDENCIES INSTALLED                      │
│  ✓ Vite, Tailwind, PostCSS                                  │
│  ✓ Plugins and tools                                         │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ npm run dev
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  DEVELOPMENT MODE                            │
│  ┌─────────────────────────────────────────────────┐        │
│  │  Browser: http://localhost:5173                 │        │
│  │  ┌──────────────────────────────────────┐       │        │
│  │  │  Your App UI                         │       │        │
│  │  │  - Tailwind styled                   │       │        │
│  │  │  - Hot reload enabled                │       │        │
│  │  │  - Test buttons                      │       │        │
│  │  └──────────────────────────────────────┘       │        │
│  │  ┌──────────────────────────────────────┐       │        │
│  │  │  Mock FileMaker Controls (bottom-right)     │        │
│  │  │  - Send test data                    │       │        │
│  │  │  - Call scripts                      │       │        │
│  │  │  - View logs                         │       │        │
│  │  └──────────────────────────────────────┘       │        │
│  └─────────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Edit files
                            │ - index.html
                            │ - src/js/main.js
                            │ - src/styles/main.css
                            │ - src/js/mock-data.json
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    ITERATIVE DEVELOPMENT                     │
│  1. Make changes to code                                     │
│  2. Browser auto-reloads                                     │
│  3. Test with mock controls                                  │
│  4. Verify behavior                                          │
│  5. Repeat                                                   │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Ready for FileMaker?
                            │ npm run build
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    PRODUCTION BUILD                          │
│  ✓ Code minified                                             │
│  ✓ CSS inlined                                               │
│  ✓ JS inlined                                                │
│  ✓ Mock code removed                                         │
│  ✓ Single file created: dist/index.html                      │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Copy dist/index.html
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    FILEMAKER INTEGRATION                     │
│  ┌─────────────────────────────────────────────────┐        │
│  │  FileMaker Solution                             │        │
│  │  ┌──────────────────────────────────────┐       │        │
│  │  │  WebViewer Object                    │       │        │
│  │  │  - Load HTML from field/file/URL     │       │        │
│  │  │  - Interact with scripts             │       │        │
│  │  │  - Send/receive data                 │       │        │
│  │  └──────────────────────────────────────┘       │        │
│  └─────────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ Test in FileMaker
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    PRODUCTION DEPLOYMENT                     │
│  ✓ WebViewer working                                         │
│  ✓ Data exchange verified                                    │
│  ✓ Scripts executing                                         │
│  ✓ Ready for users                                           │
└─────────────────────────────────────────────────────────────┘
```

## Development Cycle

### Phase 1: Setup (One Time)

```bash
# From template directory
npm run create
# Enter: project-name, description, author

cd project-name
npm install
```

### Phase 2: Development (Iterative)

```bash
npm run dev
```

**Development Loop:**
1. Edit code in your IDE
2. Browser auto-refreshes
3. Use mock controls to test
4. Check console for errors
5. Verify behavior
6. Repeat

**Key Files to Edit:**
- `index.html` - UI structure
- `src/js/main.js` - Application logic
- `src/styles/main.css` - Custom styles
- `src/js/mock-data.json` - Test data

### Phase 3: Testing

**With Mock Environment:**
- Send different data payloads
- Call various scripts
- Test error handling
- Verify UI updates
- Check console logs

**Console Testing:**
```javascript
// Send custom data
window.mockFileMaker.sendData({ test: 'data' })

// View all mock data
window.mockFileMaker.getData()

// Check script log
window.mockFileMaker.getLog()
```

### Phase 4: Build

```bash
npm run build
```

**Output:**
- `dist/index.html` - Single file with everything inlined
- Ready for FileMaker deployment

### Phase 5: Deploy to FileMaker

**Option A: From Field**
```
Set Web Viewer [
  "data:text/html;charset=utf-8," & YourTable::HTMLField
]
```

**Option B: From File**
```
Set Web Viewer [
  "file://" & Get(FilePath) & "index.html"
]
```

**Option C: From URL**
```
Set Web Viewer [
  "https://yourserver.com/index.html"
]
```

### Phase 6: Integration Testing

**Send Data to WebViewer:**
```
Perform JavaScript in Web Viewer [
  "window.receiveFromFileMaker(" & JSONFormatElements($$data) & ")"
]
```

**Receive Script Calls from WebViewer:**
- Set up `OnWebViewerURLChange` script trigger
- Parse script name and parameters
- Execute appropriate FileMaker script

## Multiple Projects Workflow

```
Template
  │
  ├─ npm run create → Project A
  │                    ├─ npm install
  │                    ├─ npm run dev
  │                    └─ npm run build
  │
  ├─ npm run create → Project B
  │                    ├─ npm install
  │                    ├─ npm run dev
  │                    └─ npm run build
  │
  └─ npm run create → Project C
                       ├─ npm install
                       ├─ npm run dev
                       └─ npm run build
```

Each project is independent with its own:
- Dependencies
- Configuration
- Source code
- Build output

## Data Flow

### Development Mode

```
Mock Controls → window.mockFileMaker.sendData()
                        ↓
                window.receiveFromFileMaker()
                        ↓
                handleFileMakerData()
                        ↓
                Update UI

Test Buttons → window.FileMaker.PerformScript()
                        ↓
                Mock FileMaker Handler
                        ↓
                Simulate Response
                        ↓
                window.receiveFromFileMaker()
```

### Production Mode (FileMaker)

```
FileMaker → Perform JavaScript in Web Viewer
                        ↓
                window.receiveFromFileMaker()
                        ↓
                handleFileMakerData()
                        ↓
                Update UI

UI Action → window.FileMaker.PerformScript()
                        ↓
                OnWebViewerURLChange Trigger
                        ↓
                FileMaker Script Execution
                        ↓
                Perform JavaScript in Web Viewer
```

## Best Practices

### During Development
1. ✅ Use mock data that matches production structure
2. ✅ Test all user interactions
3. ✅ Check browser console regularly
4. ✅ Verify responsive design
5. ✅ Test error scenarios

### Before Building
1. ✅ Remove debug console.logs (or keep minimal)
2. ✅ Test with realistic data volumes
3. ✅ Verify all features work
4. ✅ Check for JavaScript errors
5. ✅ Review UI on different screen sizes

### Before Deploying
1. ✅ Test production build locally (`npm run preview`)
2. ✅ Verify file size is reasonable
3. ✅ Check that mock code is excluded
4. ✅ Test in FileMaker WebViewer
5. ✅ Verify data exchange works

### After Deployment
1. ✅ Test all features in FileMaker
2. ✅ Verify script calls work
3. ✅ Check data display
4. ✅ Test error handling
5. ✅ Get user feedback

## Troubleshooting Workflow

```
Issue Detected
      ↓
Development Mode?
      ↓
  Yes → Check browser console
      → Use mock controls to reproduce
      → Fix code
      → Test again
      ↓
Production Build?
      ↓
  Yes → npm run preview
      → Check for build errors
      → Verify inlining worked
      → Test locally
      ↓
FileMaker Integration?
      ↓
  Yes → Check FileMaker script debugger
      → Verify JavaScript syntax
      → Test data format
      → Check WebViewer settings
```

## Quick Reference

| Task | Command |
|------|---------|
| Create project | `npm run create` |
| Install deps | `npm install` |
| Start dev | `npm run dev` |
| Build | `npm run build` |
| Preview build | `npm run preview` |

---

**Ready to start?** Run `npm run create` and begin your workflow!
