import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DepositScreen = () => {
  return (
    <div className="page">
      <ul
        class="nav nav-pills"
        style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
      >
        <li class="nav-item active">
          <Link to="#" className="navbar-brand" style={{ color: 'white' }}>
            Today
          </Link>
        </li>
        <li class="nav-item">
          <Link to="#" className="navbar-brand" style={{ color: 'white' }}>
            Tomorrow
          </Link>
        </li>
      </ul>

      <Row
        style={{ height: '2.5rem', paddingLeft: '2rem', paddingRight: '2rem' }}
      >
        <Col className="text-left">
          <h3 className="navbar-brand">Teams</h3>
        </Col>
        <Col className="text-right">
          <h3 className="navbar-brand">Away</h3>
        </Col>
      </Row>
    </div>
  );
};

export default DepositScreen;
