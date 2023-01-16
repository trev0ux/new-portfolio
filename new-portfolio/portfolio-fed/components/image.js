import NextImage from "next/image";
import getStrapiMedia from '../lib/imageUrl';

const Image = ({ image, sizes, width, height, objectFit }) => {
  return (
    <NextImage
      width={width}
      height={height}
      sizes={sizes}
      objectFit={objectFit}
      src={getStrapiMedia(image)}
    />
  );
};

export default Image;