import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faCircle } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
  return (
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
              <LinkContainer
                to="#"
                style={{
                  backgroundColor: '#1A2E37',
                  border: 'none',
                  pointer: 'cursor',
                }}
              >
                <Button className="my-3">View TIP</Button>
              </LinkContainer>
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
            paddingBottom: '2rem',
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
              <LinkContainer
                to="#"
                style={{
                  backgroundColor: '#1A2E37',
                  border: 'none',
                  pointer: 'cursor',
                }}
              >
                <Button className="my-3">View TIP</Button>
              </LinkContainer>
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
              <LinkContainer
                to="#"
                style={{
                  backgroundColor: '#1A2E37',
                  border: 'none',
                  pointer: 'cursor',
                }}
              >
                <Button className="my-3">View TIP</Button>
              </LinkContainer>
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
              <LinkContainer
                to="#"
                style={{
                  backgroundColor: '#1A2E37',
                  border: 'none',
                  pointer: 'cursor',
                }}
              >
                <Button className="my-3">View TIP</Button>
              </LinkContainer>
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
              <LinkContainer
                to="#"
                style={{
                  backgroundColor: '#1A2E37',
                  border: 'none',
                  pointer: 'cursor',
                }}
              >
                <Button className="my-3">View TIP</Button>
              </LinkContainer>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomeScreen;
