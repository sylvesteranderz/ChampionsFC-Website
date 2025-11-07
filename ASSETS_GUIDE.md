# Assets Organization Guide

This guide explains where to place your images and videos in the project.

## Directory Structure

Your project should have the following structure for assets:

```
public/
├── Images/              # Club branding images, backgrounds
│   └── CFC.jpg         # Main club logo/background
├── images/              # News and general images
│   ├── logo.png        # Club logo
│   ├── img5.jpg        # News image 1
│   ├── img6.jpg        # News image 2
│   └── CFCC8.jpg       # News image 3
├── Player-images/      # Player photos
│   ├── Richard.jpg
│   ├── img1.jpg
│   ├── IMG-20241202-WA0004.jpg
│   ├── IMG-20241202-WA0008.jpg
│   ├── IMG-20241202-WA0002.jpg
│   ├── IMG-20241202-WA0003.jpg
│   ├── Players46.jpg
│   ├── Players45.jpg
│   └── pic1.jpg
├── video/              # Match and training videos
│   ├── video1.mp4      # Match highlights
│   └── video2.mp4      # Training ground video
└── P.jpg                # Additional images
```

## Required Assets

### Hero Section (Rotating Backgrounds)
Place these images in `public/Images/` and `public/Player-images/`:
- `Images/CFC.jpg`
- `Player-images/Players46.jpg`
- `Player-images/Players45.jpg`
- `Player-images/Richard.jpg`
- `Player-images/pic1.jpg`

### News Section
Place these images in `public/images/`:
- `images/img5.jpg`
- `images/img6.jpg`
- `images/CFCC8.jpg`

### Gallery Section
Place player photos in `public/Player-images/`:
- `Player-images/Richard.jpg`
- `Player-images/img1.jpg`
- `Player-images/IMG-20241202-WA0004.jpg`
- `Player-images/IMG-20241202-WA0008.jpg`
- `Player-images/IMG-20241202-WA0002.jpg`
- `Player-images/IMG-20241202-WA0003.jpg`

### About Section
Place these images in the project root's `public/` folder:
- `Player-images/General.jpg`
- `P.jpg`

### Videos
Place videos in `public/video/`:
- `video/video1.mp4`
- `video/video2.mp4`

## Image Recommendations

### Sizes
- **Hero backgrounds**: 1920x1080 or larger (full HD)
- **News images**: 800x450px
- **Player gallery**: 600x800px
- **Profile photos**: 400x400px or square

### Formats
- Use **JPEG** for photos (`.jpg`)
- Use **PNG** for logos with transparency (`.png`)
- Use **WebP** for optimized images (optional)

### Video Formats
- **MP4** (H.264 codec) for best browser compatibility
- Keep file sizes reasonable (under 50MB per video)

## Adding Your Assets

1. Copy your images to the appropriate folders listed above
2. Ensure file names match exactly (case-sensitive)
3. For best performance, optimize images before adding
4. Videos should be compressed for web use

## Note

If you don't have all the assets yet, you can:
- Use placeholder images
- Temporarily comment out sections that require missing assets
- The website will still function, but some images may not display

