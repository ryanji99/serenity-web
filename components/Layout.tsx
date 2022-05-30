import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>Hello</title>
        <meta name="keywords" content="replace" />
        <meta name="description" content="replace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="py-[2%] px-[5%]">{children}</main>
    </div>
  );
};
export default Layout;
