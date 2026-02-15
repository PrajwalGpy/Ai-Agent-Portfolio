# 🚀 Prajwal Gopal Poojary - Portfolio Website

A modern, responsive portfolio website showcasing my expertise as an **n8n AI Automation Specialist** and **No-Code Workflow Engineer**. Built with Next.js, React, and Tailwind CSS, featuring smooth animations and an elegant dark theme.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![React](https://img.shields.io/badge/React-18-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## Features 

- **Modern Design**: Clean, professional layout with dark theme
- **Responsive**: Fully responsive across all devices and screen sizes
- **Interactive Elements**: Smooth hover effects and cursor following animation
- **Project Showcase**: Detailed project cards with technology badges
- **Contact Integration**: Direct links to social profiles and contact methods
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Optimized for search engines

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript/JavaScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Components**: Custom reusable components
- **Animations**: CSS transitions and hover effects

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── container.tsx
│   │   │   └── badge.tsx
│   │   ├── card.tsx
│   │   ├── logo-card.tsx
│   │   ├── cursorFollow.tsx
│   │   └── contact.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information
Update the hero section in `app/page.tsx`:
```javascript
<h1 className="text-5xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
  Your Name Here
</h1>
```

### Projects
Add your projects in the projects section:
```javascript
<a href="your-project-url" target="_blank" className="group">
  <Card>
    // Project content
  </Card>
</a>
```

### Tools & Technologies
Update the tools section with your tech stack:
```javascript
<LogoCard>
  <YourIcon size={25} />
  <p className="text-sm text-accent/50">Technology Name</p>
</LogoCard>
```

### Contact Information
Modify the contact component to include your social links and contact details.

## 🎯 Key Sections

### Hero Section
- **Name**: Prominently displayed with gradient text
- **Title**: Professional designation
- **CTA**: Download CV button
- **Contact**: Quick access to contact information

### About Section
- **Professional Summary**: Detailed description of expertise
- **Specializations**: Key areas of focus
- **Technologies**: Mentioned tech stack and tools
- **Personal Touch**: Interests and hobbies

### Tools Section
- **Visual Grid**: Icon-based display of technologies
- **Categories**: Organized by tool types
- **Interactive**: Hover effects for better UX

### Projects Section
- **Project Cards**: Detailed project information
- **Technology Badges**: Tech stack for each project
- **External Links**: Direct links to GitHub repositories
- **Visual Icons**: Relevant icons for each project type

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme
- **Gradient Text**: Eye-catching gradient effects
- **Hover Animations**: Smooth transitions on interactive elements
- **Responsive Layout**: Mobile-first approach
- **Cursor Following**: Interactive cursor animation
- **Glassmorphism**: Subtle glass effects on cards

## 📱 Responsive Design

- **Mobile**: < 768px - Single column layout
- **Tablet**: 768px - 1024px - Optimized for tablets
- **Desktop**: > 1024px - Full layout with sidebar

## 🔧 Configuration

### Tailwind CSS
The project uses custom Tailwind configuration. Update `tailwind.config.js` for theme customization:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: 'your-accent-color',
      }
    }
  }
}
```

### Next.js Configuration
For image optimization and external domains, update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'],
  },
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project can be deployed on any platform that supports Next.js applications.

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Prajwal Gopal Poojary**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]
- Email: [Your Email]

## 🙏 Acknowledgments

- **Next.js** - The React Framework for Production
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Popular icon library
- **Vercel** - Deployment platform

---

⭐ **Star this repository if you found it helpful!**

---

*Built with ❤️ by Prajwal Gopal Poojary*
