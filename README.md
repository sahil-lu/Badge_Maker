# BadgeBeam

A Next.js 13 webapp for minting and sharing workshop badges.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory:
```bash
N8N_WEBHOOK_URL=your_webhook_url_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Live badge preview with gradient background
- Form validation for required fields
- API integration with external webhook
- LinkedIn sharing functionality
- Mobile-first responsive design
- Production-ready for Vercel deployment

## Project Structure

```
Badge_Maker/
├── components/
│   └── BadgePreview.js          # Badge preview component
├── pages/
│   ├── api/
│   │   └── mint.js              # API route for minting badges
│   ├── _app.js                  # Next.js app wrapper
│   └── index.js                 # Landing page
├── styles/
│   └── globals.css              # Global styles with Tailwind
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── README.md                    # This file
```

## API Endpoints

### POST /api/mint

Mints a new badge by calling the external webhook.

**Request Body:**
```json
{
  "name": "John Doe",
  "role": "Software Engineer at TechCorp"
}
```

**Response:**
```json
{
  "image_url": "https://example.com/badge.png",
  "share_url": "https://example.com/share/badge123",
  "name": "John Doe",
  "role": "Software Engineer at TechCorp"
}
```

## Deployment

The app is ready for deployment on Vercel. Make sure to set the `N8N_WEBHOOK_URL` environment variable in your deployment settings.
