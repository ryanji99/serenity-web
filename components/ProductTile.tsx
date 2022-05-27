import Image from 'next/image';
import tempSupreme from '../public/images/supreme.jpg';

const ProductTile = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={tempSupreme}
            alt="product"
            quality={100}
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src={tempSupreme}
            alt="product"
            quality={100}
            objectFit="cover"
          />
        </div>
        <div>
          <Image
            src={tempSupreme}
            alt="product"
            quality={100}
            objectFit="cover"
          />
        </div>
        <div className="hidden md:block">
          <Image
            src={tempSupreme}
            alt="product"
            quality={100}
            objectFit="cover"
          />
        </div>
      </div>
      <div></div>
    </>
  );
};
export default ProductTile;
