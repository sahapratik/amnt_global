import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import EditorialIntro from '@/components/EditorialIntro';
import CollectionHeader from '@/components/CollectionHeader';
import ProductFeature from '@/components/ProductFeature';
import ImageRow from '@/components/ImageRow';
import NarrativeQuote from '@/components/NarrativeQuote';
import CraftSection from '@/components/CraftSection';
import PhotoGrid from '@/components/PhotoGrid';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';
import CursorDot from '@/components/CursorDot';
import PageLoader from '@/components/PageLoader';
import CartToast from '@/components/CartToast';

export default function Home() {
  const weekenderImages = [
    '/images/weekender/weekender-1.jpeg',
    '/images/weekender/weekender-2.jpeg',
    '/images/weekender/weekender-3.jpeg',
    '/images/weekender/weekender-4.jpeg',
    '/images/weekender/weekender-5.jpg',
  ];

  const messengerImages = [
    '/images/messenger/messenger-1.jpg',
    '/images/messenger/messenger-2.jpg',
    '/images/messenger/messenger-3.jpg',
    '/images/messenger/messenger-4.jpg',
    '/images/messenger/messenger-5.jpg',
    '/images/messenger/messenger-6.jpg',
  ];

  const walletImages = [
    '/images/wallet/wallet-1.jpg',
    '/images/wallet/wallet-2.jpg',
    '/images/wallet/wallet-3.jpg',
    '/images/wallet/wallet-4.jpg',
    '/images/wallet/wallet-5.jpg',
  ];

  return (
    <>
      <PageLoader />
      <CursorDot />
      <CartToast />
      <Navbar />

      <main>
        <Hero />
        <MarqueeStrip />

        <EditorialIntro craftImage="/images/weekender/weekender-2.jpeg" />

        <div id="collections">
          <CollectionHeader />
        </div>

        {/* Product 1 — Nomad Weekender */}
        <ProductFeature
          id="weekender"
          collection="The Bastion Collection"
          name={['Nomad', 'Weekender']}
          description="Built for short escapes and long impressions, the Nomad Weekender is a travel companion shaped by freedom and function. Crafted from crazy horse leather with a rugged yet refined finish, it is designed to age beautifully with every mile."
          price="৳17,600"
          images={weekenderImages}
          theme="cream"
          layout="normal"
        />

        <ImageRow
          images={[
            weekenderImages[1],
            messengerImages[0],
            walletImages[0],
            weekenderImages[2],
          ]}
        />

        {/* Product 2 — Envoy Messenger */}
        <ProductFeature
          id="messenger"
          collection="The Foundry Collection"
          name={['Envoy', 'Messenger']}
          description="With its clean form and classic character, the Envoy Messenger speaks to modern professionalism with ease. Crafted from premium leather and built for daily essentials, it is a piece that balances function, elegance, and enduring style."
          price="৳8,140"
          images={messengerImages}
          theme="navy"
          layout="reverse"
        />

        <NarrativeQuote />

        {/* Product 3 — Two Tone Wallet */}
        <ProductFeature
          id="wallet"
          collection="The Foundry Collection"
          name={['Two Tone', 'Wallet']}
          description="Crafted for those who appreciate detail, the Two-Tone Wallet pairs refined contrast with everyday function. Made from premium leather with a clean bifold silhouette, it brings subtle character to an essential you carry every day."
          price="৳1,040"
          images={walletImages}
          theme="offwhite"
          layout="normal"
        />

        <CraftSection />

        <div id="about">
          <PhotoGrid
            images={[
              weekenderImages[0],
              messengerImages[0],
              walletImages[0],
              weekenderImages[1],
              walletImages[1],
              messengerImages[1],
            ]}
            labels={[
              'Nomad Weekender',
              'Envoy Messenger',
              'Two Tone Wallet',
              'Bastion Collection',
              'Foundry Collection',
              'Foundry Collection',
            ]}
          />
        </div>

        <Testimonial />
      </main>

      <Footer />
    </>
  );
}
