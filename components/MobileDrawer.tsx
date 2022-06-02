import React, { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface MobileDrawerProps {
  visibility: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  visibility,
  setShowMenu,
}) => {
  return (
    <div
      className={
        'fixed inset-0 z-10 transform overflow-hidden bg-gray-900 bg-opacity-25 text-light ease-in-out ' +
        (visibility
          ? ' translate-x-0 opacity-100 transition-opacity duration-500  '
          : ' translate-x-full opacity-0 transition-all delay-500  ')
      }
    >
      <div
        className={
          ' delay-400 absolute right-0 h-full w-screen max-w-lg transform bg-dark shadow-xl transition-all duration-500 ease-in-out  ' +
          (visibility ? ' translate-x-[20%] ' : ' translate-x-full ')
        }
      >
        <div className="relative m-7 h-full w-screen max-w-lg overflow-y-scroll pb-10 uppercase">
          <li className="list-none">
            <Link href="/login">
              <ul
                onClick={() => setShowMenu(false)}
                className="my-5 cursor-pointer"
              >
                Log In
              </ul>
            </Link>
            <Link href="/register">
              <ul
                onClick={() => setShowMenu(false)}
                className="my-5 cursor-pointer"
              >
                Sign In
              </ul>
            </Link>
            <Link href="/cart">
              <ul
                onClick={() => setShowMenu(false)}
                className="my-5 cursor-pointer"
              >
                Cart
              </ul>
            </Link>
            <Link href="/shop">
              <ul
                onClick={() => setShowMenu(false)}
                className="my-5 inline cursor-pointer"
              >
                <a className="mr-5">Shop</a>
                <FontAwesomeIcon
                  className="cursor-pointer"
                  icon={faArrowCircleRight}
                />
              </ul>
            </Link>
            <Link href="/sale">
              <ul
                onClick={() => setShowMenu(false)}
                className="my-5 cursor-pointer"
              >
                Sale
              </ul>
            </Link>
            <Link href="/profile">
              <ul
                onClick={() => setShowMenu(false)}
                className="my-5 cursor-pointer"
              >
                Profile
              </ul>
            </Link>
          </li>
        </div>
      </div>
      <div
        className=" h-full w-screen cursor-pointer "
        onClick={() => setShowMenu(false)}
      ></div>
    </div>
  );
};
