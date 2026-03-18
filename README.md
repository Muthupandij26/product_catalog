# Product Catalog

A modern e-commerce product catalog application built with Next.js, React, and TypeScript. This application provides a complete shopping experience with product browsing, detailed product views, and a shopping cart.

## Demo Video


https://github.com/user-attachments/assets/4dac6b18-cd61-445b-861d-16073c4d7f84



## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun package manager

### Steps

1. **Clone or navigate to the project directory:**
```bash
cd product-catalog
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Running the Project

### Development Server
Start the development server with hot-reload enabled:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build
To create an optimized production build:

```bash
npm run build
npm start
# or
yarn build
yarn start
# or
pnpm build
pnpm start
```

### Linting
Check code quality with ESLint:

```bash
npm run lint
```

## Project Structure

```
product-catalog/
├── pages/              # Next.js pages and routes
│   ├── index.tsx      # Home page with product listing
│   ├── cart.tsx       # Shopping cart page
│   ├── products/
│   │   └── [productId].tsx  # Dynamic product detail page
│   └── api/           # API routes
├── components/         # Reusable React components
│   ├── Header.tsx     # Navigation header
│   ├── ProductCard.tsx # Product item display
│   └── ProductDetail.tsx # Product details view
├── context/           # React Context for state management
│   └── CartContext.tsx # Shopping cart state management
├── styles/           # Global styles
├── types/            # TypeScript type definitions
└── public/           # Static assets
```

## Approach & Design Choices

### Frontend Architecture
- **Next.js Pages Router**: Chosen for simplicity and server-side rendering capabilities, allowing for better SEO on product pages.
- **React Context API**: Used for cart state management, eliminating the need for external state management libraries and keeping dependencies minimal.

### Component Design
- **Modular Components**: Each feature is encapsulated in its own component (ProductCard, ProductDetail, Header) for reusability and maintainability.
- **Type Safety**: Full TypeScript adoption ensures robust code with better IDE support and compile-time error detection.

### Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development and consistent styling across the application.
- **PostCSS**: Modern CSS processing for vendor prefixes and optimizations.

### API & Data Fetching
- **Axios**: Lightweight HTTP client for fetching product data and API calls.
- **API Routes**: Next.js API routes for backend functionality without requiring a separate server.

### Developer Experience
- **ESLint**: Code linting for maintaining consistent code quality and catching potential issues early.
- **Hot Module Reload**: Automatic browser updates during development for faster feedback loops.

## Available Features
- ✅ Product catalog with listing and search
- ✅ Product detail pages with dynamic routing
- ✅ Shopping cart functionality
- ✅ Responsive header navigation
- ✅ Type-safe development with TypeScript
- ✅ Modern styling with Tailwind CSS
