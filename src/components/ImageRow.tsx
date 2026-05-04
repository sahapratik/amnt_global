import Image from 'next/image';

interface ImageRowProps {
  images: string[];
}

export default function ImageRow({ images }: ImageRowProps) {
  return (
    <div className="image-row">
      {images.map((src, i) => (
        <div key={i} className="image-row-item">
          <Image
            src={src}
            alt={`Collection detail ${i + 1}`}
            fill
            style={{ objectFit: 'cover' }}
            sizes="25vw"
          />
        </div>
      ))}
    </div>
  );
}
