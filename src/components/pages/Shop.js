import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default class Shop extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="about-row">
          <Col xs={8} xsOffset={2}>
            <Card className="shop-text" bsSize="large">
              The shop is currently being constructed. When the store is ready for viewing, this page will display the store's contents.
              Sorry for the inconvenience!
            </Card>
          </Col>
        </Row>
      </Container>
    );
  };
}
