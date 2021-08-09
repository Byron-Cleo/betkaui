import React from 'react';
import DepositHeader from './DepositHeader';

const DepositLayout = ({ children }) => {
  return (
    <>
      <DepositHeader />
      {children}
    </>
  );
};

export default DepositLayout;
