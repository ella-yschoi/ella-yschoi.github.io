'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  title: string;
  mainImage: string;
}

const ImageGallery = ({
  images,
  title,
  mainImage: initialMainImage,
}: ImageGalleryProps) => {
  const [mainImage, setMainImage] = useState(initialMainImage);

  return (
    <>
      <div className='rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg mb-4 min-h-[240px] md:min-h-[480px]'>
        <Image
          src={mainImage}
          alt={title + ' main screenshot'}
          width={800}
          height={480}
          className='object-contain w-full h-[240px] md:h-[480px]'
          priority
        />
      </div>
      <div className='flex gap-2 md:gap-4 justify-center flex-wrap md:flex-nowrap'>
        {images.map((img, idx) => (
          <button
            key={img}
            onClick={() => setMainImage(img)}
            className={`rounded-lg overflow-hidden border-2 transition-all duration-200 hover:scale-105 cursor-pointer ${
              mainImage === img
                ? 'border-black'
                : 'border-transparent hover:border-gray-300'
            }`}
            style={{ width: 120, height: 80 }}
            aria-label={`View ${title} image ${idx + 1}`}
          >
            <Image
              src={img}
              alt={title + ' thumbnail ' + (idx + 1)}
              width={120}
              height={80}
              className='object-contain w-full h-full'
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
