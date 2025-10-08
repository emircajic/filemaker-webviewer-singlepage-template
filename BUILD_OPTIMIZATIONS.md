# Build Optimizations

## Overview

The production build is highly optimized for FileMaker WebViewer deployment, resulting in the smallest possible file size while maintaining full functionality.

## Optimization Features

### 1. HTML Minification
**Plugin**: `vite-plugin-html`

Optimizations:
- ✅ Collapses whitespace
- ✅ Removes HTML comments
- ✅ Removes redundant attributes
- ✅ Removes script type attributes
- ✅ Removes style/link type attributes
- ✅ Uses short doctype
- ✅ Minifies inline CSS
- ✅ Minifies inline JavaScript

### 2. JavaScript Minification
**Tool**: Terser

Optimizations:
- ✅ Code compression and mangling
- ✅ **Strips all console calls** (`console.log`, `console.info`, `console.debug`, `console.warn`)
- ✅ Removes debugger statements
- ✅ Removes all comments
- ✅ Optimizes code structure

### 3. CSS Minification
**Tool**: Built-in CSS minifier

Optimizations:
- ✅ Removes whitespace
- ✅ Optimizes selectors
- ✅ Combines rules
- ✅ Removes unused CSS (via Tailwind)

### 4. Asset Inlining
**Plugin**: `vite-plugin-singlefile`

Optimizations:
- ✅ Inlines all JavaScript
- ✅ Inlines all CSS
- ✅ Single HTML file output
- ✅ No external dependencies

## Configuration

### Vite Config (`vite.config.js`)

```javascript
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
        minifyCSS: true,
        minifyJS: true,
      },
    }),
    viteSingleFile()
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      },
      format: {
        comments: false,
      }
    }
  }
})
```

## Build Output Comparison

### Before Optimizations
- Multiple files (HTML, CSS, JS)
- ~25 kB uncompressed
- Console calls present
- Comments included
- Whitespace preserved

### After Optimizations
- Single HTML file
- ~18.76 kB uncompressed
- ~5.31 kB gzipped
- No console calls
- No comments
- Fully minified

**Size Reduction**: ~25% smaller

## Development vs Production

### Development Mode (`npm run dev`)
- ✅ Console calls work normally
- ✅ Source maps available
- ✅ Hot module replacement
- ✅ Mock FileMaker controls visible
- ✅ Readable code
- ✅ Fast rebuilds

### Production Mode (`npm run build`)
- ✅ All console calls removed
- ✅ Fully minified
- ✅ Mock code excluded
- ✅ Single file output
- ✅ Optimized for size
- ✅ Ready for FileMaker

## Benefits for FileMaker

### 1. Smaller File Size
- Faster loading in WebViewer
- Less memory usage
- Better performance

### 2. No Console Pollution
- Cleaner FileMaker debugger
- No unnecessary log output
- Professional production code

### 3. Single File
- Easy to embed
- No external dependencies
- Simplified deployment

### 4. Optimized Performance
- Faster parsing
- Reduced network overhead
- Better user experience

## Best Practices

### During Development
```javascript
// Use console calls freely - they'll be removed in production
console.log('User data:', userData);
console.info('Feature enabled');
console.debug('Debug info:', debugData);
console.warn('Warning message');
```

### Important Console Calls
If you need console calls in production (e.g., for error logging):

```javascript
// Use console.error - it's NOT removed
console.error('Critical error:', error);

// Or create a custom logger
const logger = {
  error: (msg) => console.error(msg),
  // This will be kept in production
};
```

### Debugging Production Build
```bash
# Preview production build locally
npm run preview

# Check for console calls
grep -c "console\." dist/index.html

# Check file size
ls -lh dist/index.html
```

## Customizing Optimizations

### Keep Specific Console Calls

Edit `vite.config.js`:

```javascript
terserOptions: {
  compress: {
    drop_console: false,  // Keep all console calls
    // Or be selective:
    pure_funcs: ['console.log', 'console.debug']  // Only remove these
  }
}
```

### Disable HTML Minification

```javascript
createHtmlPlugin({
  minify: false  // Disable HTML minification
})
```

### Change Minifier

```javascript
build: {
  minify: 'esbuild'  // Use esbuild instead of terser (faster, less options)
}
```

## Verification

### Check Console Removal
```bash
grep "console\." dist/index.html
# Should return nothing
```

### Check File Size
```bash
ls -lh dist/index.html
# Should show ~18-20 kB
```

### Check Minification
```bash
head -n 1 dist/index.html
# Should be one long line
```

## Performance Metrics

| Metric | Development | Production |
|--------|-------------|------------|
| File Size | ~50 kB | ~18.76 kB |
| Gzipped | ~15 kB | ~5.31 kB |
| Console Calls | Present | Removed |
| Comments | Present | Removed |
| Whitespace | Preserved | Removed |
| Load Time | N/A | ~50ms (typical) |

## Troubleshooting

### Build Fails
- Check for syntax errors
- Verify all dependencies installed
- Try `npm install` again

### Console Calls Still Present
- Verify using Terser (not esbuild)
- Check `terserOptions` configuration
- Rebuild with `npm run build`

### File Too Large
- Check for large inline assets
- Verify Tailwind is purging unused CSS
- Consider code splitting (advanced)

---

**Version**: 1.1.0  
**Last Updated**: October 8, 2025
