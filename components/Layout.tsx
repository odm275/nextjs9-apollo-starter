import React from 'react';
import Head from 'next/head';
import Nav from './nav';


const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
