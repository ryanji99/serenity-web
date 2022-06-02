import { useState } from 'react';
import {
  faSearch,
  faShoppingBag,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { MobileDrawer } from './MobileDrawer';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div className="px-[5%] pt-7 uppercase text-light">
        <div className="flex items-center justify-between">
          <div className="flex w-1/2 space-x-48">
            <Link href="/">
              <h3 className="cursor-pointer text-xl font-bold text-primary">
                Serenity
              </h3>
            </Link>
            <div className="hidden items-center space-x-12 md:flex">
              <Link href="/">
                <h3 className="cursor-pointer">Home</h3>
              </Link>
              <Link href="/shop">
                <h3 className="cursor-pointer">Shop</h3>
              </Link>
              <Link href="/sale">
                <h3 className="cursor-pointer">Sale</h3>
              </Link>
            </div>
          </div>
          <div
            className="cursor-pointer space-y-2 md:hidden"
            onClick={() => {
              setShowMenu(!showMenu);
              console.log(showMenu);
            }}
          >
            <div className="h-0.5 w-8 bg-light"></div>
            <div className="h-0.5 w-8 bg-light"></div>
            <div className="h-0.5 w-8 bg-light"></div>
          </div>
          <div className="hidden items-center space-x-7 md:flex">
            <FontAwesomeIcon
              icon={faSearch}
              size="2x"
              height={100}
              width={25}
              className="fa-icon cursor-pointer"
              inverse
            />
            <Link href="/cart">
              <a>
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  size="2x"
                  height={100}
                  width={25}
                  className="fa-icon"
                  inverse
                />
              </a>
            </Link>
            <Link href="/login">
              <a>
                <FontAwesomeIcon
                  icon={faUserAlt}
                  size="2x"
                  height={100}
                  width={25}
                  className="fa-icon"
                  inverse
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <MobileDrawer visibility={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};
export default Navbar;
