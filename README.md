# Vansh Portfolio

A modern, responsive portfolio website built with React, Vite, and TypeScript. This project showcases my work as a Entrepreneur & IT Developer, featuring an interactive design with dark/light mode support and smooth animations.

## 🚀 Tech Stack

- **Framework:** React 18 with Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Icons:** Lucide React & Radix UI
- **Animations:** Framer Motion
- **UI Components:** Shadcn/ui
- **Theme Management:** Custom React Context
- **Build Tool:** Vite

## 📋 Features

- ✨ Responsive design that works on all devices
- 🌙 Dark/Light mode toggle
- 🎨 Modern UI with smooth animations
- 📱 Mobile-first approach
- 🚀 Fast loading with Vite
- 📧 Contact integration
- 💼 Project showcase with interactive cards
- 📋 Work experience and education timeline
- 🎯 Clean, professional design

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sahil-Prajapati-8917/Portfolio.git
cd sahil-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
sahil-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Main layout component
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── magicui/           # Animation components
│   │   ├── hero.tsx           # Hero section
│   │   ├── navbar.tsx         # Navigation component
│   │   ├── project-card.tsx   # Project showcase cards
│   │   ├── resume-card.tsx    # Resume/experience cards
│   │   ├── mode-toggle.tsx    # Dark/light mode toggle
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── icons.tsx          # Icon components
│   ├── data/
│   │   └── resume.tsx         # Resume and project data
│   ├── hooks/                 # Custom React hooks
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   ├── App.tsx               # Main App component with routing
│   └── main.tsx              # App entry point
├── public/                    # Static assets (images, CV, etc.)
├── index.html                # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Projects

Edit the `src/data/resume.tsx` file to add new projects to the portfolio.

### Modifying Theme

The theme system uses CSS custom properties. Modify the global styles in `src/app/globals.css` to customize colors and design tokens.



## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service like Vercel, Netlify, or GitHub Pages.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Migration from Next.js

This project was originally built with Next.js and has been converted to React with Vite for:

- **Faster Development:** Vite provides instant hot reloading
- **Smaller Bundle Size:** No Next.js overhead
- **Simpler Deployment:** Static hosting support
- **Better Performance:** Optimized for SPAs

### Key Changes Made:

- Replaced Next.js App Router with React Router DOM
- Converted Next.js Image components to regular HTML img tags
- Replaced next-themes with custom React context
- Removed Next.js API routes (now using static data)
- Updated build system from Next.js to Vite
- Simplified blog functionality to static content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vansh**
- Entrepreneur & IT Developer
- Portfolio: [sahil-portfolio.vercel.app](https://sahil-portfolio.vercel.app)
- LinkedIn: [linkedin.com/in/vansh-ribadiyaa-5579482b5](https://www.linkedin.com/in/vansh-ribadiyaa-5579482b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)
- GitHub: [github.com/Ribadiyavansh](https://github.com/Ribadiyavansh)
- Email: vanshribadiya3@gmail.com

---

⭐ Star this repo if you find it helpful!
