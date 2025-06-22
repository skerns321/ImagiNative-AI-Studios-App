export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jane Doe',
    role: 'CEO, Innovate Inc.',
    quote: 'Working with this team was a game-changer for our business. Their creativity and technical expertise are unmatched.',
    image: '/team/emma.jpg'
  },
  {
    id: '2',
    name: 'John Smith',
    role: 'Marketing Director, Solutions Co.',
    quote: 'The digital experiences they craft are not only beautiful but also incredibly effective. Our user engagement has skyrocketed.',
    image: '/team/michael.jpg'
  },
  {
    id: '3',
    name: 'Sarah Lee',
    role: 'Founder, Creative Ventures',
    quote: 'They are true partners in every sense of the word. They listened to our needs and delivered a product that exceeded all expectations.',
    image: '/team/sarah.jpg'
  }
]; 