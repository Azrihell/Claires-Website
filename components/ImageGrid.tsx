import Image from 'next/image';

const ImageGrid = () => {
  const images = [
    '/assets/images/stickers/Sticker1.png', 
    '/assets/images/stickers/Sticker2.png',
    '/assets/images/stickers/Sticker3.png',
    '/assets/images/stickers/Sticker4.png',
    '/assets/images/stickers/Sticker5.png',
    '/assets/images/stickers/Sticker6.png',
    '/assets/images/stickers/Sticker7.png'
  ]

  return (
    <div className="flex-container">
      {images.map((src, index) => (
        <div key={index} className="flex-item">
          <Image src={src} alt={`Sticker ${index + 1}`} width={300} height={300} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;