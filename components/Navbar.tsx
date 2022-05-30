import {
  faSearch,
  faShoppingBag,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="mb-5 py-4 px-[5%]">
      <div className="flex items-center justify-between">
        <div className="flex w-1/2 space-x-20">
          <h3 className="text-xl font-bold">Serenity</h3>
          <div className="hidden items-center space-x-8 md:flex">
            <Link href="/">
              <h3 className="cursor-pointer">Home</h3>
            </Link>
            <h3>Shop</h3>
            <h3>Sale</h3>
          </div>
        </div>
        <div className="flex items-center space-x-7">
          <FontAwesomeIcon icon={faSearch} size="lg" className="fa-icon" />
          <FontAwesomeIcon icon={faShoppingBag} size="lg" className="fa-icon" />
          <Link href="/login">
            <a className="">
              <FontAwesomeIcon icon={faUserAlt} size="lg" className="fa-icon" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
