import type { ReactElement } from 'react';
import Image from 'next/image';
import CTAImage from '../images/cta-image.png';
import Layout from '../components/Layout';
import ProductTile from '../components/ProductTile';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex max-h-screen w-full flex-col items-center justify-between md:flex-row">
        <div className="flex-col">
          <h1 className="mb-4 max-w-xl text-center text-4xl font-bold uppercase leading-snug text-light md:mb-8 md:max-w-4xl md:text-left md:text-5xl md:leading-snug lg:text-8xl lg:leading-none">
            Newest Trends At <span className="text-primary">Unbeatable</span>{' '}
            Prices
          </h1>
          <div className="flex flex-col items-center justify-center md:block">
            <p className="text-md mb-4 max-w-4xl text-center font-sans font-medium tracking-wide text-light md:mb-8 md:text-left md:text-3xl">
              Save big on new and used urban street wear. Prices you won’t find
              anywhere else. Guaranteed.
            </p>
            <Link href="/shop">
              <button className="mb-8 flex items-center justify-center rounded-md bg-primary py-3 px-6 font-neuePlak text-lg uppercase md:text-2xl">
                <a className="mr-4">Shop Now</a>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-4 hidden max-h-screen max-w-2xl md:block">
          <Image src={CTAImage} alt="girl" quality={100} objectFit="contain" />
        </div>
      </div>

      <h3 className="mb-4 text-3xl uppercase text-light md:mb-8">
        Best Sellers
      </h3>
      <ProductTile />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
