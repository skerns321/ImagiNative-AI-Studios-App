
export interface Insight {
  slug: string;
  title: string;
  date: string;
  category: string;
  description: string;
  excerpt: string;
  content: string;
  image: string;
}

export const insights: Insight[] = [
  {
    slug: 'future-of-ai-in-design',
    title: 'THE FUTURE OF AI IN DESIGN_',
    date: 'March 15, 2024',
    category: 'Technology_',
    description: 'Exploring how artificial intelligence is transforming the creative industry and what it means for designers.',
    excerpt: 'AI is revolutionizing design workflows and creative processes.',
    content: `
    Artificial intelligence (AI) is changing how we create and design. But what exactly does that mean for the designers who shape our everyday lives?

    AI in design is like having a highly efficient assistant by your side, helping you quickly handle repetitive tasks, come up with fresh ideas, and even predict what designs might work best. Let's explore this in simple terms.`,
    image: '/insights/art-is-dead.jpg'
  },
  {
    slug: 'building-sustainable-digital-products',
    title: 'BUILDING SUSTAINABLE DIGITAL PRODUCTS_',
    date: 'March 10, 2024',
    category: 'Sustainability_',
    description: 'Learn about our approach to creating environmentally conscious digital solutions.',
    excerpt: 'Creating digital products with environmental impact in mind.',
    content: `
    Sustainable digital product design goes beyond just energy efficiency. It covers the entire lifecycle of digital products—from initial development to long-term maintenance—focusing on reducing environmental impact.

    Creating digital products sustainably means being thoughtful about every step in the process, making sure the solutions not only work well but also respect the environment.

    Our Approach

    1. Energy Efficiency

    Reducing the environmental impact begins by lowering the energy needed to run digital solutions:

    Optimized code: Cleaner code runs faster and consumes less energy.
    Efficient hosting: Using servers that use less power while performing efficiently.
    Reduced carbon footprint: Fewer resources consumed mean less pollution and lower emissions.

    2. Sustainable Practices

    We integrate environmentally friendly practices into the foundation of our digital solutions:
    Green hosting providers: Choosing hosting companies that rely on renewable energy sources.

    Optimized asset delivery: Efficiently delivering digital content to use fewer resources.
    Minimal resource usage: Ensuring digital products use only what's necessary, preventing waste.

    3. Long-term Impact

    Sustainable design also means creating products that stand the test of time:

    Scalable solutions: Products designed to easily grow and adapt, reducing the need for frequent replacements.

    Future-proof architecture: Building products with flexibility, allowing them to adapt easily to future changes.

    Environmental consciousness: Encouraging users and developers alike to prioritize sustainability in their digital choices.

    In short, sustainable digital products benefit everyone by providing smarter, greener, and more responsible ways to interact with technology. Together, we can build a more environmentally friendly digital world.
    `,
    image: '/insights/sustainable-design.jpg'
  }
];
