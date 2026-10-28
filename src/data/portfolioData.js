export const personalDetails = {
  name: "Michael Okpara",
  role: "Frontend Developer",
  tagline: "I build modern, engaging, and high-performance web applications.",
  about: "I am Michael Okpara, a Frontend Developer passionate about crafting modern, pixel-perfect web experiences. I blend technical precision with an eye for aesthetics to build products that look stunning, perform flawlessly, and leave a lasting impression.",
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
  'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3', 'REST APIs', 'Git', 'Vite'
];

export const projectsData = [
  {
    id: 7,
    title: 'MellyStore — Luxury E-Commerce & Atelier',
    description: 'An editorial luxury storefront featuring live multi-currency conversion, an intelligent styling concierge, a multi-channel payment sandbox with dynamic BIN detection (Visa, Mastercard, Verve, Apple Pay, NIBSS), digital email receipts, and a PIN-secured atelier admin terminal.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'E-Commerce'],
    link: 'https://melly-store-seven.vercel.app/',
    image: '/ecommerce.png'
  },
  {
    id: 6,
    title: 'Car Rental & 3D Showroom',
    description: 'A premium car rental platform with an interactive 3D WebGL showroom, integrated multi-payment core (Stripe, Paystack, Flutterwave), and a complete admin fleet analytics dashboard.',
    tags: ['React', 'Three.js', 'Node.js', 'Express', 'Firebase', 'Stripe', 'Zustand'],
    link: 'https://car-rental-client-orcin.vercel.app/',
    image: '/rentals.png'
  },
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
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Admin dashboard with real-time data visualization charts, customizable widgets, and responsive dark mode UI.',
    tags: ['React', 'Chart.js', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/michaelokpara/dashboard',
    image: '/dashboard.png'
  }
];

export const navLinks = ['Home', 'About', 'Projects', 'Contact'];
