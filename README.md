# Nike E-Commerce Platform

A high-converting, AI-powered e-commerce platform built with **Next.js 14**, **Tailwind CSS**, and **Gemini AI**.

## 🎯 Project Overview

This is a modern Nike-inspired e-commerce website designed with:

- **Strategic Focus**: Conversion optimization, performance, and user experience
- **AI Integration**: Powered by Google Gemini for personalized recommendations
- **Mobile First**: Optimized for 70%+ mobile traffic
- **Performance**: Core Web Vitals ≥ 90, LCP < 2s
- **Global Ready**: Multi-language and localized UX support

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Type Safety**: TypeScript

### Backend & Services
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **AI/LLM**: Google Gemini API (via Vertex AI)
- **Video Generation**: Google Veo
- **Search**: Algolia with Gemini Embeddings
- **Payments**: Stripe + Google Pay
- **Hosting**: Vercel / Firebase Cloud Run

### Analytics & Monitoring
- **Analytics**: Google Analytics 4 (GA4)
- **Dashboards**: Looker Studio
- **Performance**: Lighthouse + Web Vitals

## 📁 Project Structure

```
.
├── app/                          # Next.js 14 app directory
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   └── (routes)/                # Route groups
│
├── components/
│   ├── Header.tsx               # Header component
│   ├── Navigation.tsx            # Navigation bar
│   ├── Footer.tsx               # Footer
│   └── sections/                # Page sections
│       ├── Hero.tsx             # Hero section
│       └── Objectives.tsx       # Strategic objectives
│
├── public/                       # Static assets
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript config
├── next.config.js                # Next.js config
└── package.json                  # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdoooijdb/Webb.git
cd Webb

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📋 Development Plan

### Phase 1: Foundations & Design System
- [x] Project setup (Next.js 14, Tailwind, TypeScript)
- [x] Design system tokens (colors, fonts, spacing)
- [x] Reusable components (Header, Navigation, Footer)
- [ ] Base page layouts

### Phase 2: Core Features
- [ ] Homepage & Hero sections
- [ ] Product catalog with filtering
- [ ] Product detail pages (PDP)
- [ ] Shopping cart & checkout
- [ ] User authentication

### Phase 3: AI & Personalization
- [ ] Gemini API integration
- [ ] AI-powered recommendations
- [ ] Semantic search
- [ ] Smart chatbot

### Phase 4: Advanced Features
- [ ] Payment integration (Stripe)
- [ ] Order management
- [ ] Analytics & tracking
- [ ] Performance optimization

## 🎨 Design System

### Colors
```
- Nike Black: #0a0a0a
- Nike White: #f5f5f0
- Nike Red: #e8001d
- Nike Grey: #1a1a1a
- Nike Mid: #2e2e2e
- Nike Accent: #ff4d00
- Nike Muted: #888
```

### Typography
```
- Headings: Bebas Neue
- Body: Barlow
- Labels: Barlow Condensed
```

## 📊 Key Metrics

- **Conversion Rate**: Target 3-5% (industry average 2-3%)
- **Page Load Time**: < 2s (LCP)
- **Mobile Score**: ≥ 90 (Lighthouse)
- **Cart Abandonment**: < 70% (industry average 70%)

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Gemini API](https://ai.google.dev/)

## 📝 License

MIT

## 👤 Author

**Abdoooijdb**

---

**Built with ❤️ for the future of e-commerce**
