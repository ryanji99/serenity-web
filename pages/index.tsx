import type { ReactElement } from 'react';
import Image from 'next/image';
import GirlImage from '../public/images/girl.png';
import Layout from '../components/Layout';
import ProductTile from '../components/ProductTile';

export default function Home() {
  return (
    // CTA
    <>
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div className="flex-col">
          <h1 className="mb-4 max-w-xl text-center text-5xl font-bold leading-snug md:mb-8 md:text-left md:text-4xl md:leading-snug lg:text-6xl lg:leading-snug">
            Fashion Has Never Been Cheaper
          </h1>
          <div className="flex flex-col items-center justify-center md:block">
            <p className="text-md mb-4 max-w-md text-center font-medium md:mb-8 md:text-left md:text-xl">
              Save big on new and used clothing apparel. Prices you won’t find
              anywhere else. Guaranteed.
            </p>
            <button className="mb-8 rounded-md bg-primary py-3 px-10 text-lg text-white md:text-2xl">
              Start Shopping
            </button>
          </div>
        </div>

        <div className="mb-4 hidden md:block">
          <Image src={GirlImage} alt="girl" quality={100} objectFit="contain" />
        </div>
      </div>

      <h3 className="mb-4 text-3xl md:mb-8">Best Sellers</h3>
      <ProductTile />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
