import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Image size configurations
type ImageCategory = 'projects' | 'team' | 'about' | 'insights' | 'og' | 'hero';

type Sizes = {
  [K in ImageCategory]: { width: number; height: number };
};

const sizes: Sizes = {
  projects: { width: 800, height: 600 },
  team: { width: 400, height: 400 },
  about: { width: 1200, height: 800 },
  insights: { width: 800, height: 400 },
  og: { width: 1200, height: 630 },
  hero: { width: 800, height: 400 }
};

interface ImageConfig {
  name: string;
  label: string;
}

type ImageConfigs = {
  [K in ImageCategory]?: ImageConfig[];
};

const imageConfigs: ImageConfigs = {
  hero: [
    { name: 'digital-innovation', label: 'Digital Innovation' },
    { name: 'ai-solutions', label: 'AI Solutions' },
    { name: 'creative-tech', label: 'Creative Tech' },
    { name: 'web-development', label: 'Web Development' }
  ],
  projects: [
    { name: 'digital-brand', label: 'Digital Brand' },
    { name: 'ai-solutions', label: 'AI Solutions' },
    { name: 'web3', label: 'Web3' }
  ],
  team: [
    { name: 'team1', label: 'Team Member 1' },
    { name: 'team2', label: 'Team Member 2' },
    { name: 'team3', label: 'Team Member 3' },
    { name: 'team4', label: 'Team Member 4' }
  ],
  insights: [
    { name: 'art-is-dead', label: 'AI Design' },
    { name: 'sustainability', label: 'Sustainability' },
    { name: 'ux-design', label: 'UX Design' }
  ]
};

// Create directories
const directories = [...Object.keys(imageConfigs), 'about'].map(dir => `public/${dir}`);

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Generate brutalist grid pattern SVG
function generateBrutalistPattern(width: number, height: number, text: string) {
  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E50914" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="#000000"/>
      <rect width="100%" height="100%" fill="url(#grid)"/>
      <text x="50%" y="50%" font-family="monospace" font-size="24" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">
        ${text}
      </text>
    </svg>
  `);
}

// Generate placeholder image
async function generatePlaceholderImage(width: number, height: number, outputPath: string, text: string) {
  const svgBuffer = generateBrutalistPattern(width, height, text);
  
  await sharp(svgBuffer)
    .resize(width, height)
    .toFile(outputPath);
  
  console.log(`Generated: ${outputPath}`);
}

// Generate all configured images
async function generateAllImages() {
  try {
    // Generate category images
    for (const [category, images] of Object.entries(imageConfigs)) {
      if (images && category in sizes) {
        const { width, height } = sizes[category as ImageCategory];
        for (const image of images) {
          await generatePlaceholderImage(
            width,
            height,
            `public/${category}/${image.name}.svg`,
            image.label
          );
        }
      }
    }

    // Generate special images
    await generatePlaceholderImage(
      sizes.about.width,
      sizes.about.height,
      'public/about/office.jpg',
      'Office'
    );

    await generatePlaceholderImage(
      sizes.og.width,
      sizes.og.height,
      'public/og-image.jpg',
      'ImagiNative AI Studios'
    );

    console.log('All placeholder images generated successfully!');
  } catch (error) {
    console.error('Error generating images:', error);
    process.exit(1);
  }
}

// Run the generator
generateAllImages(); 