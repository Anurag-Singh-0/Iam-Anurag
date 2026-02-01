import images from "../Images";

const projectData = [
  {
    id: 1,
    title: "HomeScape",
    slug: "homescape",
    category: "Full-stack",
    subcategory: "Real Estate Platform",
    images: [
      images.homescape1,
      images.homescape2,
      images.homescape3,
      images.homescape4,
      images.homescape5,
    ],
    live: "https://your-homescape.onrender.com/listings",
    repo: "https://github.com/Anurag-Singh-0/your-homescape",
    video: "https://youtu.be/4NycctwY91w?si=eFhMr5jMyGe5DPCe",
    alt: "HomeScape",
    status: "complete",
    featured: true,
    techStack: [
      "Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", 
      "Bootstrap", "Passport.js", "Mapbox API", "Cloudinary"
    ],
    highlights: [
      "Full-stack MVC architecture",
      "Secure user authentication with Passport.js",
      "Interactive property listings with location mapping",
      "Review system with CRUD operations",
      "Fully responsive design"
    ],
    
    // Detailed Analysis
    description: "HomeScape is a comprehensive real estate platform that allows users to browse, list, and review properties. Built with MVC architecture, it features secure authentication, real-time location mapping, and a complete review system.",
    
    problemStatement: "Traditional real estate platforms lack personalized user experiences and interactive features for property exploration and community reviews.",
    
    solution: "Implemented a user-centric platform with interactive property listings, secure authentication, and a community-driven review system.",
    
    keyFeatures: [
      "User authentication & authorization",
      "Property listing management (CRUD)",
      "Interactive map integration with Mapbox",
      "Review system for property feedback",
      "Image upload with Cloudinary",
      "Search functionality",
      "Responsive design across all devices"
    ],
    
    technicalDetails: {
      architecture: "MVC (Model-View-Controller)",
      database: "MongoDB with Mongoose ODM",
      authentication: "Passport.js with Local Strategy",
      sessionManagement: "express-session with MongoDB store",
      templateEngine: "EJS with ejs-mate",
      deployment: "Render.com for backend, Cloudinary for media"
    },
    
    installation: `# Clone the repository
git clone https://github.com/Anurag-Singh-0/your-homescape.git

# Navigate to project directory
cd your-homescape

# Install dependencies
npm install

# Set up environment variables
# Create a .env file with:
# DATABASE_URL=your_mongodb_connection_string
# MAPBOX_TOKEN=your_mapbox_token
# CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
# CLOUDINARY_KEY=your_cloudinary_key
# CLOUDINARY_SECRET=your_cloudinary_secret

# Start the development server
npm start`,
    
    challenges: [
      "Implementing secure file uploads with validation",
      "Integrating Mapbox for interactive property locations",
      "Managing user sessions across multiple devices",
      "Optimizing database queries for large property datasets"
    ],
    
    learnings: [
      "MVC architecture implementation",
      "Third-party API integration best practices",
      "Session management and security",
      "File upload optimization and validation"
    ],
    
    futureEnhancements: [
      "Add real-time chat between buyers and sellers",
      "Implement property price prediction using ML",
      "Add virtual property tours",
      "Enable social media sharing"
    ]
  },

  {
    id: 2,
    title: "React Password Generator",
    slug: "react-password-generator",
    category: "Frontend",
    subcategory: "Security Tool",
    images: [images.rpgLaptop, images.rpgMobile, images.rpgLaptop],
    live: "https://react-password-generator01.netlify.app/",
    repo: "https://github.com/Anurag-Singh-0/React-password-generator",
    video: "https://www.instagram.com/reel/DLxKEu5P-aw/?igsh=bG5nY2FkbXByOWpn",
    alt: "Password Generator",
    status: "complete",
    featured: true,
    techStack: ["React", "JavaScript", "CSS", "Clipboard API"],
    highlights: [
      "Real-time password generation",
      "Customizable password criteria",
      "One-click copy to clipboard",
      "Responsive design"
    ],
    
    // Detailed Analysis
    description: "A modern password generator built with React that provides secure, customizable passwords with real-time feedback and easy copy functionality.",
    
    technicalDetails: {
      hooksUsed: ["useState", "useEffect", "useCallback", "useRef"],
      features: ["Length control", "Character type selection", "Strength indicator", "Copy functionality"],
      deployment: "Netlify"
    },
    
    installation: `# Clone repository
git clone https://github.com/Anurag-Singh-0/React-password-generator.git

# Install dependencies
npm install

# Start development server
npm start`,
    
    features: [
      "8-32 character length range",
      "Include/exclude numbers",
      "Include/exclude special characters",
      "Password strength indicator",
      "One-click copy with visual feedback"
    ]
  },

  {
    id: 3,
    title: "QR Code Generator",
    slug: "qr-code-generator",
    category: "Frontend",
    subcategory: "Utility Tool",
    images: [
      images.qrcodeLaptop,
      images.qrcodeLaptop,
      images.qrcodeMobile,
      images.qrcodeIPad,
    ],
    live: "https://qr-code-generator-anurag.vercel.app/",
    repo: "https://github.com/Anurag-Singh-0/QR-Code",
    video: "https://www.instagram.com/reel/DIbcG9ds94t/?igsh=MXZ2cHowaG8weGpybw==",
    alt: "QR Code",
    status: "complete",
    featured: false,
    techStack: ["HTML", "CSS", "JavaScript", "QR Code API"],
    highlights: [
      "Instant QR generation",
      "Download functionality",
      "Input validation",
      "Responsive design"
    ],
    
    // Detailed Analysis
    description: "A lightweight QR code generator that instantly creates downloadable QR codes for any text or URL input.",
    
    technicalDetails: {
      api: "QRServer API",
      features: ["Real-time generation", "Download option", "Input validation"],
      deployment: "Vercel"
    }
  },

  {
    id: 4,
    title: "FuryLand E - commerce",
    slug: "furyland-ecommerce",
    category: "Full-stack",
    subcategory: "E-commerce Platform",
    images: [images.furylandFrontPage],
    alt: "FuryLand",
    status: "coming soon",
    featured: true,
    techStack: ["MERN Stack", "Redux", "Stripe", "JWT", "Cloudinary"],
    highlights: [
      "Full-featured e-commerce platform",
      "Secure payment integration",
      "Admin dashboard",
      "User authentication"
    ],
    
    // Detailed Analysis
    description: "A complete MERN stack e-commerce solution with user authentication, product management, cart functionality, and secure payment processing.",
    
    features: [
      "User authentication with JWT",
      "Product catalog with categories",
      "Shopping cart functionality",
      "Payment integration with Stripe",
      "Order management system",
      "Admin dashboard for product management",
      "Product reviews and ratings"
    ],
    
    technicalDetails: {
      frontend: "React with Redux for state management",
      backend: "Node.js with Express.js",
      database: "MongoDB with Mongoose",
      authentication: "JWT with bcrypt",
      payment: "Stripe API",
      deployment: "Vercel (frontend), Render (backend)"
    }
  }
];

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projectData.filter(project => project.featured);
};

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectData.find(project => project.slug === slug);
};

// Get projects by category
export const getProjectsByCategory = (category) => {
  if (category === 'All') return projectData;
  return projectData.filter(project => project.category === category);
};

// Get all categories
export const getAllCategories = () => {
  const categories = ['All'];
  projectData.forEach(project => {
    if (!categories.includes(project.category)) {
      categories.push(project.category);
    }
  });
  return categories;
};

export default projectData;