import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AMNT — Luxury Leather Goods',
  description: 'Leather goods for modern living. Crafted with purpose. Built to last. Timeless by design.',
  keywords: 'AMNT, luxury leather, handcrafted bags, leather goods, Bangladesh, Bastion Collection, Foundry Collection',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'AMNT — Luxury Leather Goods',
    description: 'Leather goods for modern living. Crafted with purpose. Built to last.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#5A0A0A" />
        {/* Fallback favicon link for all browsers */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
