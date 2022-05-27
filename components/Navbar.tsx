import {
  faSearch,
  faShoppingBag,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="mb-5 hidden py-4 px-[5%] md:block">
      <div className="flex items-center justify-between">
        <div className="flex w-1/2 space-x-20">
          <h3 className="text-xl font-bold">SHOP NAME</h3>
          <div className="flex items-center space-x-8">
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
          <FontAwesomeIcon icon={faUserAlt} size="lg" className="fa-icon" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
