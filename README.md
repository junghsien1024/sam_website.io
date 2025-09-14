# Sam Wei - Personal Portfolio Website

A modern, responsive personal portfolio website built with React 18, Styled Components, and Framer Motion.

## Features

- 🚀 Modern React 18 with hooks and functional components
- 🎨 Styled Components for CSS-in-JS styling
- ✨ Framer Motion for smooth animations
- 📱 Fully responsive design
- 🌐 Optimized for GitHub Pages deployment
- ♿ Accessible design with proper ARIA labels
- 🔍 SEO optimized with React Helmet

## Tech Stack

- **React 18** - Modern React with concurrent features
- **React Router DOM** - Client-side routing
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **React Helmet Async** - SEO and meta tag management
- **AOS** - Animate on scroll effects

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/samwei/personal-website.git
cd personal-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://samwei.github.io/personal-website`

### Manual Deployment

To deploy manually:

```bash
npm run build
npm run deploy
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── Card.js         # Card component
│   ├── Section.js      # Section wrapper
│   └── Button.js       # Button component
├── pages/              # Page components
│   ├── HomePage.js     # Home page
│   ├── WorkPage.js     # Work experience page
│   └── PortfolioPage.js # Portfolio page
├── styles/             # Global styles and theme
│   ├── GlobalStyle.js  # Global CSS styles
│   └── theme.js        # Design system theme
├── assets/             # Static assets
│   └── images/         # Image files
├── App.js              # Main app component
└── index.js            # App entry point
```

## Customization

### Theme

The design system is defined in `src/styles/theme.js`. You can customize:

- Colors
- Typography
- Spacing
- Breakpoints
- Shadows
- Border radius

### Content

Update the content in the respective page components:

- `src/pages/HomePage.js` - Homepage content
- `src/pages/WorkPage.js` - Work experience
- `src/pages/PortfolioPage.js` - Portfolio projects

### Images

Add your images to `src/assets/images/` and update the imports in the page components.

## Performance

This project is optimized for performance with:

- Code splitting with React.lazy
- Image optimization
- Minimal bundle size
- Efficient re-renders with React.memo
- Optimized animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- LinkedIn: [Sam Wei](https://www.linkedin.com/in/sam-wei-cornell/)
- Email: sam.wei@example.com
