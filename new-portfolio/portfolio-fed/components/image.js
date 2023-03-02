import NextImage from "next/image";
import getStrapiMedia from '../lib/imageUrl';

const Image = ({ image, sizes, width, height, objectFit, alt }) => {
  return (
    <NextImage
      width={width}
      height={height}
      sizes={sizes}
      alt={alt}
      objectFit={objectFit}
      src={getStrapiMedia(image)}
    />
  );
};

export default Image;