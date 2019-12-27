import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { WorkExperience, Education, Certifications, SoftwareProjects, ProficientTechAndSkills } from './PortfolioSubsections';

export default class Portfolio extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="portfolio-row">
          <Col xs={12} md={6} mdOffset={3}>
            <Row>
              <h2>
                Welcome to  my portfolio! Images below have links for more information.
                If one wishes to view my résumé, please <a href="/contact">contact</a> me.
              </h2>
              <WorkExperience/>
              <Education/>
              <Certifications/>
              <SoftwareProjects/>
              <ProficientTechAndSkills/>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  };
}
