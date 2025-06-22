const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const directories = [
  'public/projects',
  'public/team',
  'public/about',
  'public/insights',
  'public/hero'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Function to create a simple SVG placeholder and save it as file
function createPlaceholder(width, height, text, filename) {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
        ${text}
      </text>
    </svg>
  `;
  
  fs.writeFileSync(filename, svg);
  console.log(`Generated: ${filename}`);
}

// Copy the uploaded image to use instead of generating a placeholder
function copyImageIfExists(sourcePath, destPath, fallbackWidth, fallbackHeight, fallbackText) {
  try {
    if (fs.existsSync(sourcePath)) {
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied: ${sourcePath} to ${destPath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error copying image ${sourcePath}:`, error.message);
  }
  createPlaceholder(fallbackWidth, fallbackHeight, fallbackText, destPath);
  return false;
}

// Define all image configurations
const imageConfigs = {
  hero: [
    { name: 'digital-innovation.jpg', label: 'Digital Innovation' },
    { name: 'ai-solutions.jpg', label: 'AI Solutions' },
    { name: 'creative-tech.jpg', label: 'Creative Tech' },
    { name: 'web-development.jpg', label: 'Web Development' }
  ],
  projects: [
    { name: 'digital-brand.svg', label: 'Digital Brand' },
    { name: 'ai-solutions.svg', label: 'AI Solutions' },
    { name: 'web3.svg', label: 'Web3' }
  ],
  team: [
    { name: 'team1.svg', label: 'Team Member 1' },
    { name: 'team2.svg', label: 'Team Member 2' },
    { name: 'team3.svg', label: 'Team Member 3' },
    { name: 'team4.svg', label: 'Team Member 4' }
  ],
  insights: [
    { name: 'art-is-dead.svg', label: 'AI Design' },
    { name: 'sustainability.svg', label: 'Sustainability' },
    { name: 'ux-design.svg', label: 'UX Design' }
  ]
};

// Generate all images
Object.entries(imageConfigs).forEach(([category, images]) => {
  images.forEach(image => {
    const filePath = `public/${category}/${image.name}`;
    createPlaceholder(
      category === 'team' ? 400 : 800,
      category === 'team' ? 400 : 400,
      image.label,
      filePath
    );
  });
});

// Generate special images
createPlaceholder(1200, 800, 'Office', 'public/about/office.jpg');
createPlaceholder(1200, 630, 'ImagiNative AI Studios', 'public/og-image.jpg');

// Handle project with real image
const sourcePath = 'attached_assets/IMG_1925.jpeg';
const destPath = 'public/projects/project1.jpg';
copyImageIfExists(sourcePath, destPath, 800, 600, 'Project 1');

console.log('All placeholder images generated successfully!');
