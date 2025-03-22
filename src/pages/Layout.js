import React from 'react';
import Header from './Header';
import Footer from './Footerr';
import "./styles/Layout.css"

const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <div>{children}</div>
        <Footer />
      </>
    );
  };
export default Layout