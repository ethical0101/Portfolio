export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  liveDemo?: string;
  github?: string;
  image: string;
  features: string[];
  category: string;
}

const githubUsername = import.meta.env.VITE_GITHUB_USERNAME || 'ethical0101';

export const projects: Project[] = [
  {
    id: "ai-trip-planner",
    name: "AI Trip Planner",
    description: "Smart travel planning application with AI-powered recommendations and real-time data integration.",
    fullDescription: "A comprehensive travel planning platform that leverages artificial intelligence to create personalized itineraries based on user preferences, budget, and travel style. The application features real-time weather integration, local attractions discovery, budget optimization, and collaborative planning tools for group trips.",
    techStack: ["React", "TypeScript", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS", "Express", "JWT"],
    liveDemo: "https://ai-trip-planner-demo.com",
    github: `https://github.com/${githubUsername}/ai-trip-planner`,
    image: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Full Stack",
    features: [
      "AI-powered itinerary generation using OpenAI GPT",
      "Real-time weather and location data integration",
      "Budget optimization and expense tracking",
      "Collaborative planning with team members",
      "Interactive maps with custom markers",
      "Multi-destination route optimization",
      "Local attractions and restaurant recommendations",
      "Responsive design with offline capabilities"
    ]
  },
  {
    id: "document-planner",
    name: "Document Planner",
    description: "Collaborative document management system with real-time editing and workflow automation.",
    fullDescription: "A powerful document management platform that enables teams to collaborate on projects, plan documentation workflows, and track progress in real-time. Features include version control, automated workflow management, template systems, and advanced search capabilities.",
    techStack: ["React", "Firebase", "Material-UI", "WebSocket", "Node.js", "Express", "MongoDB"],
    liveDemo: "https://document-planner-demo.com",
    github: `https://github.com/${githubUsername}/document-planner`,
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Full Stack",
    features: [
      "Real-time collaborative editing with conflict resolution",
      "Advanced version control and document history",
      "Automated workflow management and approvals",
      "Team management with role-based permissions",
      "Document templates and style guides",
      "Advanced search with full-text indexing",
      "Integration with popular productivity tools",
      "Analytics dashboard for team productivity"
    ]
  },
  {
    id: "storyforge",
    name: "StoryForge",
    description: "Interactive storytelling platform with multimedia support and community features.",
    fullDescription: "A creative platform for writers and storytellers to create interactive narratives with multimedia elements. Users can craft branching stories, add images, audio, and video, and share their creations with a global community of readers and writers.",
    techStack: ["React", "Redux", "Node.js", "MongoDB", "AWS S3", "Socket.io", "WebRTC"],
    liveDemo: "https://storyforge-demo.com",
    github: `https://github.com/${githubUsername}/storyforge`,
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Full Stack",
    features: [
      "Interactive branching narrative system",
      "Multimedia integration (images, audio, video)",
      "Real-time collaborative writing",
      "Community features with ratings and reviews",
      "Advanced story analytics and reader insights",
      "Export to multiple formats (PDF, EPUB, HTML)",
      "Social sharing and discovery features",
      "Monetization tools for creators"
    ]
  },
  {
    id: "netflix-clone",
    name: "Netflix Clone",
    description: "Full-stack streaming platform with user authentication and content management.",
    fullDescription: "A complete Netflix clone built with modern web technologies, featuring user authentication, movie browsing, search functionality, and responsive design. Includes admin panel for content management, user analytics, and subscription handling.",
    techStack: ["React", "Node.js", "MongoDB", "JWT", "Stripe", "AWS CloudFront", "Redis"],
    liveDemo: "https://netflix-clone-demo.com",
    github: `https://github.com/${githubUsername}/netflix-clone`,
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Full Stack",
    features: [
      "User authentication with JWT and refresh tokens",
      "Video streaming with adaptive bitrate",
      "Advanced search and filtering capabilities",
      "Personalized recommendations engine",
      "Subscription management with Stripe integration",
      "Admin panel for content and user management",
      "Responsive design for all devices",
      "Analytics dashboard with viewing statistics"
    ]
  },
  {
    id: "movieland",
    name: "Movieland",
    description: "Movie discovery application with ratings, reviews, and personalized recommendations.",
    fullDescription: "A comprehensive movie discovery platform that helps users find new movies based on their preferences. Features include detailed movie information, user ratings, reviews, watchlists, and AI-powered personalized recommendations using machine learning algorithms.",
    techStack: ["React", "TypeScript", "TMDB API", "Firebase", "Tailwind CSS", "Chart.js"],
    liveDemo: "https://movieland-demo.com",
    github: `https://github.com/${githubUsername}/movieland`,
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Frontend",
    features: [
      "Advanced movie search with filters and sorting",
      "User ratings and detailed reviews system",
      "Personalized recommendations using ML algorithms",
      "Watchlist management with sharing capabilities",
      "Trending movies and box office statistics",
      "Social features for following other users",
      "Movie trailers and cast information",
      "Dark/light theme with smooth transitions"
    ]
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description: "Modern, responsive portfolio website with dark/light mode and smooth animations.",
    fullDescription: "A sleek and modern portfolio website built with React and Framer Motion, featuring smooth animations, glassmorphism design, and a dark/light mode toggle. Showcases projects, skills, and contact information in an elegant and professional manner.",
    techStack: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "EmailJS", "Vite"],
    liveDemo: "https://kommi-portfolio.com",
    github: `https://github.com/${githubUsername}/portfolio`,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Frontend",
    features: [
      "Smooth animations with Framer Motion",
      "Glassmorphism design with blur effects",
      "Dark/light mode toggle with smooth transitions",
      "Responsive design for all screen sizes",
      "Contact form with EmailJS integration",
      "Interactive project showcase",
      "Performance optimized with lazy loading",
      "SEO optimized with meta tags"
    ]
  }
];
