import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Qviq",
    icon: "/logo.webp",
    iconBg: "white",
    date: "May 2024 - Present",
    points: [
      "Developed user-friendly and responsive web interfaces (UI) using front-end technologies",
      "Implemented clean, maintainable, and well-documented code adhering to best practices.",
      "Built robust back-end systems to support application functionality using appropriate technologies.",
      "Ensured smooth data flow through CRUD operations (Create, Read, Update, Delete).",
      "Integrated secure payment gateways and handled API requests for seamless user experience.",
    ],
  },
  {
    title: "DEVELOPER JOB SIMULATION(remote)",
    company_name: "Accenture(Forage)",
    icon: "/Accenture-Logo.png",
    iconBg: "white",
    date: "Feb 2023 - Nov 2023",
    points: [
      "Designed changes to an existing software development lifecycle (SDLC).",
      "Scaled on-premise system infrastructure to the cloud.",
      "Performed security maturity assessments.",
      "Implemented IAM policies and permissions.",
      "Demonstrated attention to detail through code reading and comprehension.",
      "Debugging Algorithms.",
    ],
  },
  {
    title: "Threads Clone (Personal Project)",
    company_name: "",
    icon: "/dark-logo.svg",
    iconBg: "white",
    date: "March 2024 - April 2024",
    points: [
      "Developed a dynamic social media feed using React components to display posts, user profiles, and real-time updates.",
      "Implemented real-time chat functionality using libraries like Socket.IO or WebSockets for seamless user interaction.",
      "Integrated browser notifications.",
      "Real-time features: Emphasize the real-time functionalities like chat, notifications, and dynamic feed updates using appropriate technologies.",
      "Social media core functionalities: Highlight building features like creating and managing posts, commenting, liking, and following other users.",
      "Account management: Mention user account creation, profile editing, and the ability to freeze accounts for privacy control.",
    ],
  },
  {
    title: "Foodieee Application (Personal Project)",
    company_name: "",
    icon: "/foodOrderAppLogo.png",
    iconBg: "#383E56",
    date: "July 2023 - Sep 2023",
    points: [
      "Convenience: This app makes it easy for people to order food from their favorite restaurants without having to leave their homes or offices",
      "Variety: It offers a wide variety of food items to choose from, including pizzas, burgers, and pastas",
      "Social integration: Allows users to log in and out using their Facebook or Google accounts, which makes it easy for them to use your app and share their experiences with their friends and family.",
      "Customization: Allows users to add items to their cart and customize their orders to their liking",
      "Accessibility: This app is fully responsive, which means that it can be used on any device, including smartphones, tablets, and laptops",
      "And more...",
    ],
  },
  {
    title: "Fiverr Clone",
    company_name: "",
    icon: "/fiverr.png",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - mar 2023",
    points: [
      "It's a one-stop shop for finding and hiring freelancers. This app makes it easy for users to find qualified freelancers for a wide variety of tasks, from web design to writing to video editing",
      "It's convenient and easy to use. Users can browse gigs, contact freelancers, and pay for services all within your app.",
      "It's secure and reliable. Your app uses secure payment processing and data protection measures to keep users' information safe.",
      "It has a built-in chat feature. This allows users to communicate directly with freelancers before and after they hire them.",
      "It has a review system. This allows users to rate and review freelancers, which helps other users make informed decisions.",
      "And more...",
    ],
  },
  {
    title: "Hotel Booking Application",
    company_name: "",
    icon: "/booking.png",
    iconBg: "#383E56",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Convenience: This app makes easy for users to book hotels from their smartphones or tablets, from anywhere in the world.",
      "Real-time room reservation system: This app allows users to book rooms in real time, so they can always find the best deals available.",
      "Price filter functionality: This app allows users to filter hotels by price, so they can find hotels that fit their budget.",
      "Fully responsive: This app is fully responsive, which means that it can be used on any device, including smartphones, tablets, and laptops.",
      "And more...",
    ],
  },
  {
    title: "Netflix Clone",
    company_name: "",
    icon: "/netflix.png",
    iconBg: "#E6DEDD",
    date: "July 2022 - Aug 2022",
    points: [
      "Search functionality: This app's search functionality allows users to easily find movies and TV shows that they want to watch.",
      "Genre filters: This app's genre filters allow users to find movies and TV shows that match their interests.",
      "Add to favorites: Your app's 'add to favorites' feature allows users to save movies and TV shows that they want to watch later.",
      "Fetching data from API: Your app fetches data from an API, which allows you to keep your app's content up-to-date.",
      "And more...",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Threads clone",
    description:
      "full-fledged social media clone using MERN stack, featuring real-time chat, notifications, dynamic feeds, and user account management with account freezing functionality. (Mongoose, Express, React, Socket.IO/WebSockets)",
    tags: [
      {
        name: "Chakra-ui",
        color: "blue-text-gradient",
      },
      {
        name: "vite(React)",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    image: "/threads.png",
    hostLink: "https://threadsclone-klew.onrender.com",
    source_code_link: "https://github.com/VenkateshSircilla123/threadsClone",
  },
  {
    name: "Foodieee (Food delivary App)",
    description:
      "Order your favorite food online with just a few clicks. We deliver from your favorite restaurants to your doorstep.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma(PostgreSql)",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: "/restaurantSS.png",
    hostLink: "https://vs-restaurant-app.vercel.app/",
    source_code_link: "https://github.com/VenkateshSircilla123/VSRestaurantApp",
  },
  {
    name: "Netflix Clone",
    description:
      "Watch your favorite movies and TV shows online, anytime, anywhere. Create a personalized profile to discover new content you'll love.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: "/netflixSS.png",
    hostLink: "https://vs-netflix-app.vercel.app/",
    source_code_link: "https://github.com/VenkateshSircilla123/VSNetflixApp",
  },
  {
    name: "Hotel Booking",
    description:
      "Find and book the perfect hotel for your next trip, all in one place. Compare prices, amenities, and reviews to get the best deal.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "/bookingSS.png",
    hostLink: "https://vsbookingapp.onrender.com",
    source_code_link: "https://github.com/",
  },
  {
    name: "Fiverr clone",
    description:
      "Built a feature-rich freelance marketplace clone using MERN stack. Users can find and offer services, with real-time communication and project management tools. (React, Node.js, Express, MongoDB)",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: "/fiverrClone.png",
    hostLink: "https://fiver-clone-six.vercel.app/",
    source_code_link: "https://github.com/VenkateshSircilla123/fiver-clone",
  },
  {
    name: "Responsive Admin Dashboard",
    description: "Amazing Frontend landing page for admin dashboard",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: "/responsiveAdminDashboard.png",
    hostLink: "https://venkateshsircilla123.github.io/ResponsiveAdminDashboard",
    source_code_link:
      "https://github.com/VenkateshSircilla123/ResponsiveAdminDashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
