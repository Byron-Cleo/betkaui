import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
          <Link to="/" className="navbar-brand">
            Betka
          </Link>
          <Link to="/deposit" className="btn btn-light my-3 cust-btn">
            Login/Register
          </Link>
        </div>
      </nav>
    </>
  );
};

export default HomeHeader;
