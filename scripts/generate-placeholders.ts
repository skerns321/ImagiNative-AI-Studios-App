import fs from 'fs';
import path from 'path';

function generatePlaceholder() {
  return `<svg width="100%" height="100%" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#000000"/>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)"/>
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E50914" stroke-width="1"/>
      </pattern>
    </defs>
  </svg>`;
}

// Run this script to generate placeholder images
const heroImagePaths = [
  'public/hero/digital-innovation.jpg',
  'public/hero/ai-solutions.jpg',
  'public/hero/creative-tech.jpg',
  'public/hero/web-development.jpg',
  'public/projects/digital-brand.svg',
  'public/projects/ecommerce.svg',
  'public/projects/mobile-app.svg',
  'public/projects/ai-platform.svg',
  'public/logo.svg'
];

// Create directories if they don't exist
heroImagePaths.forEach(path => {
  const dir = path.split('/').slice(0, -1).join('/');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate placeholder SVGs
heroImagePaths.forEach(path => {
  const svg = generatePlaceholder();
  fs.writeFileSync(path, svg);
});

console.log('Placeholder images generated successfully!'); 