# 🚀 Personal Portfolio - Full Stack Developer

A modern, responsive personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a bilingual interface (English/French) with smooth animations and a professional design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

- 🌍 **Bilingual Support**: English and French language switching
- 🎨 **Modern Design**: Clean, professional dark theme with smooth animations
- 📱 **Responsive Layout**: Optimized for all devices and screen sizes
- ⚡ **Performance**: Built with Next.js 14 for optimal performance
- 🎭 **Smooth Animations**: Framer Motion powered hover effects and transitions
- 🌙 **Theme Support**: Dark mode with elegant color scheme
- 📄 **Resume Download**: Language-specific PDF downloads
- 🔍 **SEO Optimized**: Meta tags and structured content

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### Styling & UI
- **CSS Modules** - Component-scoped styling
- **Responsive Design** - Mobile-first approach
- **Custom Components** - Reusable UI components
- **Hover Effects** - Interactive card animations

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **TypeScript Config** - Strict type checking

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
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

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── hooks/             # Custom React hooks
│   └── *.tsx              # Feature components
├── lib/                    # Utility functions
│   ├── messages.json      # Bilingual content
│   └── utils.ts           # Helper functions
├── public/                 # Static assets
│   ├── EN_Mansour_FullStackDeveloper.pdf
│   └── FR_Mansour_FullStackDeveloper.pdf
└── package.json            # Dependencies and scripts
```

## 🌍 Internationalization

The portfolio supports multiple languages through a custom localization system:

- **English (en)**: Default language
- **French (fr)**: Secondary language
- **Dynamic Content**: All text content switches seamlessly
- **Resume Downloads**: Language-specific PDF files
- **Smooth Transitions**: Animated language switching

### Adding New Languages

1. Update `lib/messages.json` with new language content
2. Add language option to the locale switcher
3. Include corresponding resume PDF in the public folder

## 🎨 Customization

### Colors & Themes
- Primary colors defined in Tailwind config
- Dark theme with accent colors
- Consistent color scheme throughout

### Components
- Modular component architecture
- Easy to customize and extend
- Reusable UI patterns

### Animations
- Configurable animation delays
- Smooth hover effects
- Performance-optimized transitions

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Tailwind CSS responsive utilities
- **Flexible Layout**: Adapts to all screen sizes
- **Touch Friendly**: Optimized for touch interactions

## 🚀 Deployment

### Cloudflare Workers (OpenNext)

This project uses `@opennextjs/cloudflare`. In the Cloudflare dashboard, set:

| Setting | Command |
|--------|---------|
| **Build command** | `npm run build:cloudflare` |
| **Deploy command** | `npx wrangler deploy` |
| **Node.js version** | `22` (see `.nvmrc`) |

Do **not** use `npm run build` alone for deploy — it only runs `next build` and does not create `.open-next/worker.js`.

Local deploy:

```bash
npm run deploy
```

### Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Static site deployment
- **AWS S3**: Cloud hosting
- **Custom Server**: Node.js hosting

## 📄 Resume Integration

The portfolio automatically serves the correct resume based on the current language:

- **English**: `EN_Mansour_FullStackDeveloper.pdf`
- **French**: `FR_Mansour_FullStackDeveloper.pdf`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mansour Ben Mansour**
- Full Stack Developer
- Specializing in React, Next.js, and modern web technologies
- Based in Tunis, Tunisia

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS approach
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons

## 📞 Contact

- **Email**: mansour.benmansour@esprit.tn
- **Phone**: +216 29 598 701
- **Location**: Tunis, El Aouina, 4230 Tunisie

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by Mansour Ben Mansour

