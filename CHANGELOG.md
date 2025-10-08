# Changelog

All notable changes to this template will be documented in this file.

## [1.1.0] - 2025-10-08

### Added
- HTML minification with `vite-plugin-html`
- Terser minification for JavaScript
- Automatic console call stripping in production builds
- Debugger statement removal in production
- Comment removal in production builds

### Changed
- Updated Vite configuration to use Terser instead of default esbuild
- Enhanced build optimization settings
- Improved production bundle size

### Dependencies
- Added: vite-plugin-html
- Added: terser

## [1.0.0] - 2025-10-08

### Added
- Initial template release
- Vite build system with single-file output
- Tailwind CSS v4 integration
- PostCSS configuration
- Mock FileMaker environment for development
- Interactive development controls panel
- Project generator script (`npm run create`)
- Comprehensive documentation:
  - README.md - Main documentation
  - QUICKSTART.md - Quick start guide
  - TEMPLATE.md - Template usage guide
  - USAGE.md - Detailed usage instructions
  - PROJECT_SUMMARY.md - Project overview
  - INDEX.md - Documentation index
  - CHANGELOG.md - This file
- Sample mock data in JSON format
- FileMaker integration helpers
- Development and production build configurations
- .gitignore file
- MIT License

### Features
- Single HTML file output with inlined CSS/JS
- Hot reload development server
- Mock FileMaker script execution
- Script call logging
- Customizable test data
- Responsive UI with Tailwind CSS
- FileMaker WebViewer ready

### Dependencies
- vite: ^7.1.9
- tailwindcss: ^4.1.14
- @tailwindcss/postcss: ^4.1.14
- postcss: ^8.5.6
- autoprefixer: ^10.4.21
- vite-plugin-singlefile: ^2.3.0

---

## Template Versioning

This template follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible changes
- **MINOR** version for new features (backwards compatible)
- **PATCH** version for bug fixes

## How to Update

### For Template Maintainers

1. Make changes to the template
2. Update version in `package.json`
3. Document changes in this CHANGELOG
4. Test thoroughly:
   ```bash
   npm run dev
   npm run build
   npm run create
   ```
5. Commit changes

### For Project Users

Projects created from this template are independent. To get template updates:

1. **Manual merge**: Copy updated files from template
2. **Cherry-pick**: Take only specific improvements
3. **Recreate**: Generate new project and migrate code

---

## Future Roadmap

### Planned Features
- [ ] TypeScript support option
- [ ] React/Vue integration option
- [ ] Additional mock data examples
- [ ] FileMaker script templates
- [ ] UI component library
- [ ] Dark mode support
- [ ] Accessibility improvements
- [ ] Performance optimizations

### Under Consideration
- [ ] Multiple page support
- [ ] State management integration
- [ ] API integration helpers
- [ ] Testing framework
- [ ] CI/CD templates
- [ ] Docker support

---

## Contributing

To contribute to this template:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Update documentation
6. Update this CHANGELOG
7. Submit a pull request

---

**Current Version**: 1.0.0  
**Last Updated**: October 8, 2025
