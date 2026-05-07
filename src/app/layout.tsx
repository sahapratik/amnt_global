import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AMNT — Luxury Leather Goods',
  description: 'Leather goods for modern living. Crafted with purpose. Built to last. Timeless by design.',
  keywords: 'AMNT, luxury leather, handcrafted bags, leather goods, Bangladesh, Bastion Collection, Foundry Collection',
  icons: {
    icon: [
      { url: '/amnt-favicon.png', type: 'image/png' },
    ],
    shortcut: '/amnt-favicon.png',
    apple:    '/amnt-favicon.png',
  },
  openGraph: {
    title: 'AMNT — Luxury Leather Goods',
    description: 'Leather goods for modern living. Crafted with purpose. Built to last.',
    type: 'website',
    images: [{ url: '/amnt-logo.jpg', width: 1080, height: 1080, alt: 'AMNT Logo' }],
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
        {/* Favicon — the AMNT logo grid image */}
        <link rel="icon"             type="image/png" href="/amnt-favicon.png" />
        <link rel="shortcut icon"    type="image/png" href="/amnt-favicon.png" />
        <link rel="apple-touch-icon" type="image/png" href="/amnt-favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
