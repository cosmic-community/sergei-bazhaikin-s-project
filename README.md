# Sergei Bazhaikin's Project - PIM System

![App Preview](https://imgix.cosmicjs.com/b207c4d0-45a5-11f1-a3ff-65bbafb72c6d-autopilot-photo-1495474472287-4d71bcdd2085-1777671338386.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern Product Information Management (PIM) system built with Next.js 16 and Cosmic CMS for managing and showcasing your product catalog.

## Features

- 🏠 Beautiful homepage with featured products and category showcase
- 📦 Detailed product pages with image galleries and specifications
- 🏷️ Category browsing with filtered product listings
- 🏢 Brand pages displaying all products per brand
- 💰 Smart pricing display with sale prices
- 📊 Real-time stock status indicators
- 📱 Fully responsive design
- ⚡ Server-side rendering for optimal performance
- 🎨 Modern UI with Tailwind CSS

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f51c53c27d356ff5003546&clone_repository=69f51d45c27d356ff500357c)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: PIM system (product catalog)"

### Code Generation Prompt

> Build a Next.js application for a website called "Sergei Bazhaikin's Project". The content is managed in Cosmic CMS with the following object types: brands, categories, products. Create a beautiful, modern, responsive design with a homepage and pages for each content type.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Cosmic CMS** - Content management ([Cosmic docs](https://www.cosmicjs.com/docs))
- **@cosmicjs/sdk** - Official Cosmic SDK

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with bucket access

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Set up environment variables (already configured for your bucket)

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Cosmic SDK Examples

### Fetching Products
```typescript
const response = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Product
```typescript
const response = await cosmic.objects
  .findOne({ type: 'products', slug })
  .depth(1)
```

### Filtering Products by Category
```typescript
const response = await cosmic.objects
  .find({ type: 'products', 'metadata.categories': categoryId })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with three Cosmic object types:
- **Products** - Main catalog items with pricing, images, and specs
- **Categories** - Product categorization
- **Brands** - Brand information and logos

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Connect repository
2. Set build command: `bun run build`
3. Add environment variables
4. Deploy

<!-- README_END -->