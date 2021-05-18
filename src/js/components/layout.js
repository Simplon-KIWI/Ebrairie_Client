import React from 'react';
import Header from './header';
import Nav from './nav';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <Nav />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
