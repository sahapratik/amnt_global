export default function MarqueeStrip() {
  const items = [
    'Artisan Leather',
    'Bastion Collection',
    'The Foundry',
    'Handcrafted in Bangladesh',
    'Timeless Design',
    'Crazy Horse Leather',
    'Built to Last',
    'Quiet Luxury',
  ];

  const doubled = [...items, ...items];

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
