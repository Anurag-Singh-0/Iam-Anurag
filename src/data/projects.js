import images from "../Images";

const projectData = [

   {
    id: 1,
    title: "FuryLand",
    slug: "furyland",
    category: "Full-stack",
    subcategory: "Commerce Management System",
    images: [
      images.home,
      images.order,
      images.collection,
      images.cart,
      images.search,
      images.admin_dashboard,
      images.admin_add,
      images.admin_customer,
      images.admin_list,
      images.admin_order
    ],
    live: "https://furyland.vercel.app",
    repo: "#", // Private repository
    video: "",
    alt: "FuryLand E-Commerce Management System",
    status: "complete",
    featured: true,
    techStack: [
      "React 19",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS v4",
      "Stripe & Razorpay",
      "JWT",
      "Cloudinary",
    ],
    highlights: [
      "Three-tier modular architecture",
      "Dual user and admin panels",
      "Dual payment gateway integration (Stripe & Razorpay)",
      "Secure JWT-based authentication",
      "Invoice generation and order tracking",
    ],

    // Detailed Analysis
    description:
      "FuryLand is a complete end-to-end online commerce management system. It provides a unified digital solution for small and medium-scale businesses to manage their entire online store, featuring a dedicated user shopping panel and a highly secure admin dashboard.",

    problemStatement:
      "Small businesses struggle to manage online operations efficiently as product management, order handling, and payment processing are often handled through disconnected or manual systems. Existing platforms are frequently too expensive or difficult to customize.",

    solution:
      "Developed an independent, integrated platform that unifies the complete online commerce workflow. It simplifies business operations by providing centralized control over inventory, orders, and customers without external dependencies.",

    keyFeatures: [
      "Secure User & Admin Authentication (JWT/bcrypt)",
      "Advanced Product Management (CRUD, Image Uploads via Cloudinary)",
      "Integrated Checkout with both Stripe and Razorpay",
      "Cart persistence and global state management",
      "Dynamic Order Tracking & Invoice Generation using PDFKit",
      "Admin Dashboard with Sales and Customer Analytics",
    ],

    technicalDetails: {
      architecture:
        "Three-tier architecture (Presentation, Application, Data Layers)",
      frontend: "React 19, Vite, Tailwind CSS v4, Framer Motion",
      backend: "Node.js, Express.js",
      database: "MongoDB Atlas with Mongoose ODM",
      authentication: "JSON Web Tokens (JWT) & bcrypt",
      payments: "Stripe API & Razorpay Integration",
    },

    installation: `# Note: Repository is currently Private.
# Standard MERN setup applies for authorized collaborators:

# 1. Clone the repository
git clone <private-repo-url>

# 2. Install Frontend Dependencies
cd frontend
npm install

# 3. Install Backend Dependencies
cd ../backend
npm install

# 4. Set up environment variables (.env)
# MONGO_URI=your_mongodb_atlas_url
# JWT_SECRET=your_jwt_secret
# STRIPE_SECRET_KEY=your_stripe_key
# RAZORPAY_KEY_ID=your_razorpay_key
# CLOUDINARY_URL=your_cloudinary_url

# 5. Start the development servers
npm run dev`,

    challenges: [
      "Implementing state management to ensure cart persistence across page reloads and navigation",
      "Building strict checkout validation to prevent orders with incomplete delivery data",
      "Integrating two different payment gateways (Stripe and Razorpay) seamlessly",
      "Designing a secure, role-based architecture separating Customer and Admin access",
    ],

    learnings: [
      "Architecting scalable MERN applications using a 3-tier structure",
      "Handling complex payment flows and webhooks securely",
      "Managing global state for shopping carts efficiently",
      "Generating dynamic server-side PDFs for invoicing",
    ],

    futureEnhancements: [
      "AI Recommendations: Implementing ML models to suggest products based on browsing history",
      "Multi-Vendor Support: Expanding to allow multiple sellers to manage their own mini-stores",
      "Mobile App Expansion: Porting the web logic into a native mobile app using React Native",
    ],
  },

  {
    id: 2,
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
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
      "Passport.js",
      "Mapbox API",
      "Cloudinary",
    ],
    highlights: [
      "Full-stack MVC architecture",
      "Secure user authentication with Passport.js",
      "Interactive property listings with location mapping",
      "Review system with CRUD operations",
      "Fully responsive design",
    ],

    // Detailed Analysis
    description:
      "HomeScape is a comprehensive real estate platform that allows users to browse, list, and review properties. Built with MVC architecture, it features secure authentication, real-time location mapping, and a complete review system.",

    problemStatement:
      "Traditional real estate platforms lack personalized user experiences and interactive features for property exploration and community reviews.",

    solution:
      "Implemented a user-centric platform with interactive property listings, secure authentication, and a community-driven review system.",

    keyFeatures: [
      "User authentication & authorization",
      "Property listing management (CRUD)",
      "Interactive map integration with Mapbox",
      "Review system for property feedback",
      "Image upload with Cloudinary",
      "Search functionality",
      "Responsive design across all devices",
    ],

    technicalDetails: {
      architecture: "MVC (Model-View-Controller)",
      database: "MongoDB with Mongoose ODM",
      authentication: "Passport.js with Local Strategy",
      sessionManagement: "express-session with MongoDB store",
      templateEngine: "EJS with ejs-mate",
      deployment: "Render.com for backend, Cloudinary for media",
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
      "Optimizing database queries for large property datasets",
    ],

    learnings: [
      "MVC architecture implementation",
      "Third-party API integration best practices",
      "Session management and security",
      "File upload optimization and validation",
    ],

    futureEnhancements: [
      "Add real-time chat between buyers and sellers",
      "Implement property price prediction using ML",
      "Add virtual property tours",
      "Enable social media sharing",
    ],
  },

  {
    id: 3,
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
      "Responsive design",
    ],

    // Detailed Analysis
    description:
      "A modern password generator built with React that provides secure, customizable passwords with real-time feedback and easy copy functionality.",

    technicalDetails: {
      hooksUsed: ["useState", "useEffect", "useCallback", "useRef"],
      features: [
        "Length control",
        "Character type selection",
        "Strength indicator",
        "Copy functionality",
      ],
      deployment: "Netlify",
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
      "One-click copy with visual feedback",
    ],
  },

  {
    id: 4,
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
    video:
      "https://www.instagram.com/reel/DIbcG9ds94t/?igsh=MXZ2cHowaG8weGpybw==",
    alt: "QR Code",
    status: "complete",
    featured: false,
    techStack: ["HTML", "CSS", "JavaScript", "QR Code API"],
    highlights: [
      "Instant QR generation",
      "Download functionality",
      "Input validation",
      "Responsive design",
    ],

    // Detailed Analysis
    description:
      "A lightweight QR code generator that instantly creates downloadable QR codes for any text or URL input.",

    technicalDetails: {
      api: "QRServer API",
      features: ["Real-time generation", "Download option", "Input validation"],
      deployment: "Vercel",
    },
  },

 
];

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projectData.filter((project) => project.featured);
};

// Helper function to get project by slug
export const getProjectBySlug = (slug) => {
  return projectData.find((project) => project.slug === slug);
};

// Get projects by category
export const getProjectsByCategory = (category) => {
  if (category === "All") return projectData;
  return projectData.filter((project) => project.category === category);
};

// Get all categories
export const getAllCategories = () => {
  const categories = ["All"];
  projectData.forEach((project) => {
    if (!categories.includes(project.category)) {
      categories.push(project.category);
    }
  });
  return categories;
};

export default projectData;
