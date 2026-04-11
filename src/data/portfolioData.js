export const personalDetails = {
  name: "Michael Okpara",
  role: "Frontend Developer",
  tagline: "I build modern, engaging, and performant web applications.",
  about: "I am Michael Okpara, a passionate Frontend Developer obsessed with minimal, pixel-perfect designs. I blend technical skills with a keen eye for aesthetics to create products that don't just function flawlessly, but also leave a lasting impression.",
  resumeLink: "/resume.pdf",
  email: "okparachukwukamichael@gmail.com",
  copyrightYear: new Date().getFullYear(),
};

export const socialLinks = [
  { platform: "Email", url: `mailto:${personalDetails.email}`, handle: personalDetails.email },
  { platform: "LinkedIn", url: "https://linkedin.com/in/okpara-michael-b2726321a", handle: "okpara-michael" },
  { platform: "GitHub", url: "https://github.com/michael-max265", handle: "@michael-max265" }
];

export const techStack = [
  'React', 'Vite', 'JavaScript (ES6+)', 'TypeScript', 'HTML5/CSS3', 'Framer Motion', 'Git', 'Figma'
];

export const projectsData = [
  {
    id: 5,
    title: 'Glamour Gallery',
    description: 'A beautifully designed masonry image gallery showcasing fashion, beauty, and lifestyle aesthetics with a modern, responsive UI.',
    tags: ['React', 'Vite', 'CSS Modules'],
    link: 'https://glamour-gallery.vercel.app/',
    image: '/glamour.png'
  },
  {
    id: 4,
    title: 'Perfume Store',
    description: 'An elegant e-commerce platform for premium fragrances featuring secure authentication, cart management, and a seamless responsive layout.',
    tags: ['React', 'Vite', 'Google Auth'],
    link: 'https://perfume-store-silk-three.vercel.app/',
    image: '/perfume.png'
  },
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern shopping experience built with React and Redux, featuring secure Stripe payments and a beautiful cart interface.',
    tags: ['React', 'Commerce.js', 'Stripe'],
    link: 'https://github.com/michaelokpara/ecommerce',
    image: '/ecommerce.png'
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Admin dashboard with real-time data visualization charts, customizable widgets, and responsive dark mode UI.',
    tags: ['Vite', 'Chart.js', 'Tailwind'],
    link: 'https://github.com/michaelokpara/dashboard',
    image: '/dashboard.png'
  },
  {
    id: 3,
    title: 'Social App UI',
    description: 'A sleek, dark-mode social media application interface with micro-interactions, clean typography, and nested routing.',
    tags: ['React', 'Framer Motion', 'CSS Modules'],
    link: 'https://github.com/michaelokpara/social-app',
    image: '/social.png'
  }
];

export const navLinks = ['Home', 'About', 'Projects', 'Contact'];
