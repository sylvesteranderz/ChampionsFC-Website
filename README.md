# Champions FC - Football Website

A modern, responsive football club website built with React and TypeScript.

## Features

- 🏠 **Modern Design**: Clean and professional football club website
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- 🎨 **Interactive**: Animated backgrounds, smooth scrolling, and engaging animations
- 📊 **Live Scores**: Integrated live match scores via Sofascore
- 🎥 **Video Highlights**: Showcase match highlights and training videos
- 📰 **News Section**: Latest club news and updates
- 🏆 **Statistics**: Animated counters for team statistics
- 🖼️ **Photo Gallery**: Interactive player gallery with slider

## Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **CSS3** - Modern styling with animations and custom styles

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section with rotating backgrounds
│   ├── News.tsx        # Latest news section
│   ├── LiveScores.tsx  # Live match scores
│   ├── ManagerQuotes.tsx # Inspirational quotes
│   ├── Stats.tsx       # Team statistics with animations
│   ├── VideoHighlights.tsx # Match highlights
│   ├── Gallery.tsx     # Player photo gallery
│   ├── About.tsx       # About the club
│   ├── CTA.tsx         # Call-to-action section
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Adding Your Media

Replace the placeholder images and videos with your actual content:

1. **Images**: Place images in the `public/` directory
   - Club logo and branding images
   - News images
   - Player photos
   - Team photos

2. **Videos**: Place videos in the `public/video/` directory
   - Match highlights
   - Training videos

## Components Overview

### Header
- Fixed navigation bar
- Responsive mobile menu
- Smooth scroll navigation

### Hero
- Rotating background images
- Call-to-action buttons
- Full-screen hero section

### News
- Latest club news cards
- Hover effects
- Grid layout

### LiveScores
- Embedded Sofascore widget
- Real-time standings
- Responsive iframe

### Stats
- Animated counters
- Team statistics
- Number animations

### Gallery
- Image slider
- Navigation buttons
- Responsive images

## Customization

### Changing Colors

Edit the CSS files in `src/components/` to change the color scheme. The primary color is currently green (`#4CAF50`).

### Modifying Content

All content is defined in the component files. Simply edit the text, images, and links in each component.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Champions FC. All rights reserved.

## Contact

For questions or support, please contact Champions FC.

---

Built with ❤️ for Champions FC
