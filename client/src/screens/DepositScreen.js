import React from 'react';
import { Row, Col, Container, Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faCircle } from '@fortawesome/free-solid-svg-icons';

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
      <div>
        <Card
          border="light"
          style={{
            backgroundColor: '#0c1625',
            height: '2.5rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            border: '#0c1625',
          }}
        >
          <Card.Header
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                color: '#ABADB2',
              }}
            >
              <FontAwesomeIcon
                icon={faFutbol}
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  marginRight: '10px',
                }}
              />
              England
              <FontAwesomeIcon
                icon={faCircle}
                style={{
                  width: '.5rem',
                  height: '.5rem',
                  marginLeft: '10px',
                  marginRight: '10px',
                  alignSelf: 'center',
                }}
              />
              Championship
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                color: '#ABADB2',
              }}
            >
              04/05, 22:00
            </div>
          </Card.Header>
          <Card.Body
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Card.Title>
              <div>Luton</div>
              <div>Rotherham</div>
            </Card.Title>
            <Card.Text>
              <div
                style={{
                  backgroundColor: '#1A2E37',
                  border: 'none',
                  pointer: 'cursor',
                  padding: '.2rem',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    padding: '.2rem',
                  }}
                >
                  Market: Both Teams to Score
                </div>
                <div
                  style={{
                    padding: '.2rem',
                    color: 'green',
                  }}
                >
                  Pick: Yes
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          border="light"
          style={{
            backgroundColor: '#0c1625',
            height: '2.5rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            border: '#0c1625',
            marginTop: '5rem',
          }}
        >
          <Card.Header
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                color: '#ABADB2',
              }}
            >
              <FontAwesomeIcon
                icon={faFutbol}
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  marginRight: '10px',
                }}
              />
              England
              <FontAwesomeIcon
                icon={faCircle}
                style={{
                  width: '.5rem',
                  height: '.5rem',
                  marginLeft: '10px',
                  marginRight: '10px',
                  alignSelf: 'center',
                }}
              />
              Championship
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                color: '#ABADB2',
              }}
            >
              04/05, 22:00
            </div>
          </Card.Header>
          <Card.Body
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Card.Title>
              <div>Luton</div>
              <div>Rotherham</div>
            </Card.Title>
            <Card.Text>
              <div
                style={{
                  backgroundColor: '#1A2E37',
                  border: 'none',
                  pointer: 'cursor',
                  padding: '.2rem',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    padding: '.2rem',
                  }}
                >
                  Market: 3 Away
                </div>
                <div
                  style={{
                    padding: '.2rem',
                    color: 'green',
                  }}
                >
                  Pick: Luton
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          border="light"
          style={{
            backgroundColor: '#0c1625',
            height: '2.5rem',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            border: '#0c1625',
            marginTop: '5rem',
          }}
        >
          <Card.Header
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                color: '#ABADB2',
              }}
            >
              <FontAwesomeIcon
                icon={faFutbol}
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  marginRight: '10px',
                }}
              />
              England
              <FontAwesomeIcon
                icon={faCircle}
                style={{
                  width: '.5rem',
                  height: '.5rem',
                  marginLeft: '10px',
                  marginRight: '10px',
                  alignSelf: 'center',
                }}
              />
              Championship
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                color: '#ABADB2',
              }}
            >
              04/05, 22:00
            </div>
          </Card.Header>
          <Card.Body
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Card.Title>
              <div>Luton</div>
              <div>Rotherham</div>
            </Card.Title>
            <Card.Text>
              <div
                style={{
                  backgroundColor: '#1A2E37',
                  border: 'none',
                  pointer: 'cursor',
                  padding: '.2rem',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    padding: '.2rem',
                  }}
                >
                  Market: 3 Away
                </div>
                <div
                  style={{
                    padding: '.2rem',
                    color: 'green',
                  }}
                >
                  Pick: Luton
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Container
        style={{
          marginTop: '8rem',
          // backgroundColor: 'yellow',
          paddingLeft: '2rem',
          paddingRight: '2rem',
        }}
      >
        <h4>Deposit</h4>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link
              href="#"
              style={{
                borderRadius: '30%',
                backgroundColor: '#1A2E37',
                display: 'flex',
                flexDirectiom: 'column',
                justifycontent: 'center',
                textAlign: 'center',
                marginLeft: '.5rem',
                marginRight: '.5rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '.8rem',
                    alignSelf: 'center',
                    color: 'green',
                  }}
                >
                  1 Day
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: 'white',
                    alignSelf: 'center',
                  }}
                >
                  KSh 30
                </div>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              style={{
                borderRadius: '30%',
                backgroundColor: '#1A2E37',
                display: 'flex',
                flexDirectiom: 'column',
                justifycontent: 'center',
                textAlign: 'center',
                marginLeft: '.5rem',
                marginRight: '.5rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '.8rem',
                    alignSelf: 'center',
                    color: 'green',
                  }}
                >
                  Weekly
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: 'white',
                    alignSelf: 'center',
                  }}
                >
                  KSh 200
                </div>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="#"
              style={{
                borderRadius: '30%',
                backgroundColor: '#1A2E37',
                display: 'flex',
                flexDirectiom: 'column',
                justifycontent: 'center',
                textAlign: 'center',
                marginLeft: '.5rem',
                marginRight: '.5rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '.8rem',
                    alignSelf: 'center',
                    color: 'green',
                  }}
                >
                  Monthly
                </div>
                <div
                  style={{
                    fontSize: '1rem',
                    color: 'white',
                    alignSelf: 'center',
                  }}
                >
                  KSh 500
                </div>
              </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};

export default DepositScreen;
