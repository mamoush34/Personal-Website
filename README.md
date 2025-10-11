# 🚀 Personal Website - Mohammad Amoush

Modern personal portfolio website built with React 18, TypeScript 5, and Framer Motion.

## 📋 Tech Stack

### Frontend
- **React 18** - Modern functional components with hooks
- **TypeScript 5** - Type-safe JavaScript
- **MobX 6** - State management with makeObservable pattern
- **React Router 6** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **SCSS** - Modern CSS with variables and nesting

### Backend
- **Express** - Web server
- **MongoDB** - Database (optional)
- **Node.js 18+** - Runtime environment

### Build Tools
- **Webpack 5** - Module bundler
- **ts-loader** - TypeScript compilation
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🛠️ Development

### Prerequisites
```bash
Node.js >= 18.0.0
npm >= 8.0.0
```

### Installation
```bash
# Install dependencies
npm install

# Build the project
npm run build:dev

# Start development server
npm run dev
```

Visit `http://localhost:8000` to view the website.

## 📝 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build:dev    # Build for development (with source maps)
```

### Production
```bash
npm run build        # Build for production (optimized)
npm start            # Start production server
```

### Code Quality
```bash
npm run lint         # Check for linting errors
npm run lint:fix     # Auto-fix linting errors
npm run format       # Format code with Prettier
npm run precommit    # Run lint:fix + format (before committing)
```

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Production
The server includes HTTPS redirect for production (skips localhost):
```typescript
// HTTPS redirect (already configured)
server.use((req, res, next) => {
    if (req.hostname === 'localhost' || req.hostname === '127.0.0.1') {
        return next(); // Skip for local development
    }
    if (!req.secure && req.get("x-forwarded-proto") !== "https") {
        return res.redirect(`https://${req.hostname}${req.url}`);
    }
    next();
});
```

## 📖 Project Structure

```
src/
├── client/               # Frontend code
│   ├── data/            # Static data (projects)
│   ├── models/          # TypeScript models
│   ├── stores/          # MobX stores
│   ├── views/           # React components
│   ├── App.tsx          # Main app component
│   └── index.tsx        # Entry point
├── server/              # Backend code
│   ├── database.ts      # MongoDB utilities
│   └── index.ts         # Express server
└── index.html           # HTML template

static/                  # Build output
├── bundle.js           # Compiled JavaScript
├── index.html          # Copied HTML
└── images/             # Static images
```

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration
- `webpack.config.js` - Webpack bundler configuration
- `.eslintrc.js` - ESLint linting rules
- `.prettierrc` - Prettier formatting rules

## 📝 License

ISC

## 👤 Author

Mohammad Amoush
- GitHub: [@mamoush34](https://github.com/mamoush34)
- LinkedIn: [mohammad-amoush](https://www.linkedin.com/in/mohammad-amoush/)

