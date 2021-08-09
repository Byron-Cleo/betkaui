import React from 'react';
import HomeHeader from './HomeHeader';

const BaseLayout = ({ children }) => {
  return (
    <>
      <HomeHeader />
      {children}
    </>
  );
};

export default BaseLayout;
