# 👋 Hi, I'm Kommi Druthendra

**Frontend & Full Stack Developer** passionate about creating beautiful, high-performance web applications with cutting-edge technology. I transform ideas into seamless digital experiences.

[Portfolio Preview](https://portfolio-phi-nine-70.vercel.app/)

## 🚀 About Me

I'm a dedicated developer who loves crafting modern web applications that make a difference. With expertise in React, TypeScript, and full-stack development, I build solutions that are not just functional, but delightful to use.

### What I Do
- 🎨 **Frontend Development** - Creating stunning, responsive user interfaces
- ⚡ **Full Stack Solutions** - Building complete web applications from concept to deployment
- 🎯 **User Experience** - Designing intuitive and engaging user experiences
- 🚀 **Performance Optimization** - Ensuring fast, efficient applications
- 📱 **Responsive Design** - Making applications work seamlessly across all devices

### My Philosophy
I believe in writing clean, maintainable code and creating applications that users love to interact with. Every project is an opportunity to learn something new and push the boundaries of what's possible on the web.

## 💼 This Portfolio

This repository contains my personal portfolio website - a showcase of my skills, projects, and passion for web development. It's built with modern technologies and demonstrates my expertise in creating professional, interactive web applications.

## ✨ Portfolio Features

This portfolio showcases my technical skills through:

- 🎨 **Modern Design** - Clean, professional interface with glassmorphism effects
- 🌙 **Theme Switching** - Dark/Light mode with smooth transitions (because who doesn't love dark mode?)
- 📱 **Responsive Design** - Works beautifully on all devices - phone, tablet, or desktop
- ⚡ **Smooth Animations** - Engaging animations that enhance user experience
- 🔄 **Interactive Background** - Dynamic geometric shapes that respond to user interaction
- 📧 **Contact Integration** - Functional contact form so you can reach out to me easily
- 🎯 **Custom Cursor** - A unique touch that adds personality to the browsing experience
- 🚀 **Performance First** - Fast loading with optimized assets and code splitting

## 🛠️ Technologies I Used

Building this portfolio gave me the opportunity to work with some amazing technologies:

### Core Technologies
- **React 18** - My go-to library for building interactive UIs
- **TypeScript** - Because type safety makes everything better
- **Vite** - Lightning-fast development and building
- **Tailwind CSS** - Utility-first CSS that speeds up development
- **Framer Motion** - For those smooth, buttery animations

### Additional Tools
- **EmailJS** - Handling contact form submissions without a backend
- **Lucide React** - Beautiful, customizable icons
- **ESLint & Prettier** - Keeping my code clean and consistent
- **PostCSS & Autoprefixer** - Ensuring cross-browser compatibility

### Why These Choices?
I chose this tech stack because it represents modern web development best practices. React with TypeScript gives me confidence in my code, while Tailwind and Framer Motion allow me to create beautiful, responsive designs quickly. Each tool serves a purpose in creating a fast, maintainable, and enjoyable development experience.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ethical0101/portfolio-pro.git
   cd portfolio-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file in the root directory
   touch .env
   ```

   Add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Add your profile image**
   ```bash
   # Place your profile image in the public/images/ directory
   mkdir -p public/images
   # Add your profile-2.jpg file
   ```

5. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio-pro/
├── public/
│   ├── images/          # Profile images and assets
│   ├── cv/             # CV/Resume files
│   └── fonts/          # Custom fonts
├── src/
│   ├── components/     # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── contexts/       # React contexts
│   │   └── ThemeContext.tsx
│   ├── data/          # Static data
│   │   └── projects.ts
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── README.md
├── package.json
└── vite.config.ts
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`)
   - Update name, title, and description
   - Modify social media links
   - Replace CV download link

2. **About Section** (`src/components/About.tsx`)
   - Update bio and skills
   - Modify contact information
   - Add your expertise areas

3. **Projects** (`src/data/projects.ts`)
   - Add your project details
   - Include project images, descriptions, and links
   - Update technology stacks

4. **Contact Information** (`src/components/Contact.tsx`)
   - Update contact details
   - Modify EmailJS configuration

### Theme Colors
Customize the color scheme in `src/index.css`:

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #000000;
  --text-secondary: #6b7280;
  /* Add your custom colors */
}
```

### Profile Image
Replace the profile image:
1. Add your image to `public/images/`
2. Update the image path in `src/components/Hero.tsx`

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `src/components/Contact.tsx`:
   ```tsx
   await emailjs.send(
     'your_service_id',
     'your_template_id',
     templateParams,
     'your_public_key'
   );
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-pro",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy: `npm run deploy`

## 🎯 Performance Optimizations

- ⚡ **Lazy Loading** - Images and components load on demand
- 🗜️ **Code Splitting** - Dynamic imports for better performance
- 📱 **Responsive Images** - Optimized images for different screen sizes
- 🎨 **CSS Optimization** - Purged unused CSS in production
- 🚀 **Fast Loading** - Optimized bundle size and loading strategies

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Let's Connect

I'm always excited to discuss new projects, opportunities, or just chat about technology! Here's how you can reach me:

**Kommi Druthendra** - Frontend & Full Stack Developer

- 🌐 **Portfolio**: [https://kommi-portfolio.com](https://kommi-portfolio.com) - You're looking at it!
- 💼 **LinkedIn**: [kommidruthendra](https://www.linkedin.com/in/kommidruthendra/) - Let's connect professionally
- 🐙 **GitHub**: [ethical0101](https://github.com/ethical0101) - Check out my other projects
- 🐦 **Twitter**: [@Druthendra](https://x.com/Druthendra) - Follow for tech updates and insights
- 📧 **Email**: kommidruthendra2005@gmail.com - Drop me a line anytime

### Want to Work Together?
I'm currently open to:
- **Freelance Projects** - Web development, React applications, and more
- **Full-time Opportunities** - Frontend or Full Stack Developer positions
- **Collaboration** - Open source projects and interesting ideas
- **Mentoring** - Helping other developers on their journey

## 💡 Fun Facts About This Portfolio

- 🎯 **Custom Cursor** - I built a custom cursor because I believe in the details
- 🌙 **Theme Persistence** - Your theme preference is remembered across sessions
- 📱 **Mobile-First** - Designed and coded mobile-first, then enhanced for larger screens
- ⚡ **Performance Score** - Achieving 90+ on all Lighthouse metrics
- 🎨 **Design System** - Built with a consistent design system and reusable components
- 🔄 **Real-time Updates** - The background animation adapts to your screen size in real-time

## 📊 Project Insights

This portfolio represents more than just a showcase - it's a demonstration of my development philosophy:

- **User-Centered Design** - Every interaction is designed with the user in mind
- **Performance Matters** - Optimized for speed without sacrificing functionality
- **Accessibility First** - Built to be usable by everyone
- **Modern Standards** - Following current best practices and web standards
- **Continuous Improvement** - Regularly updated with new features and optimizations

## 🙏 Acknowledgments & Inspiration

Building this portfolio was an incredible learning experience. Special thanks to:

- **The React Team** - For creating such an amazing library
- **Framer Motion** - For making animations accessible and delightful
- **Tailwind CSS** - For changing how I think about CSS
- **The Open Source Community** - For all the amazing tools and inspiration
- **Fellow Developers** - For sharing knowledge and pushing me to be better

---

## � GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=ethical0101&show_icons=true&theme=dark)
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=ethical0101&layout=compact&theme=dark)

![GitHub Stars](https://img.shields.io/github/stars/ethical0101/portfolio-pro?style=social)
![GitHub Forks](https://img.shields.io/github/forks/ethical0101/portfolio-pro?style=social)
![GitHub Followers](https://img.shields.io/github/followers/ethical0101?style=social)

---

⭐ **If you like my work, consider starring this repository!**

💬 **Questions?** Feel free to reach out - I love talking about code, technology, and new opportunities.

Made with ❤️ and lots of ☕ by [Kommi Druthendra](https://github.com/ethical0101)
