import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <>
      <div className="page">
        <Row
          style={{
            height: '2.5rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
          }}
        >
          <Col className="text-left">
            <h3 className="navbar-brand">Teams</h3>
          </Col>
          <Col className="text-right">
            <h3 className="navbar-brand">Away</h3>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomeScreen;
