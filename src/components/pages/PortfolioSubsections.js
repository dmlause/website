import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

// Work Experience subsection for the portfolio page
export const WorkExperience = () => {
    return (
        <Card style={{ width:'50%'}}>
          <Card.Header>
            <Card.Title toggle className="section-text">
              Work Experience
            </Card.Title>
          </Card.Header>
            <Card.Body className="body-text">
              <a href="https://www.express-scripts.com">
                <img title="Express Scripts" src={require("../../assets/images/esi.png")} alt="ESI" height="50"/>
                </a>
              <p className="portfolio-text">Express Scripts Software Engineer</p>
            </Card.Body>
            <Card.Body className="body-text">
              <a href="http://www.keystonedigital.com">
                <img title="Keystone Digital" src={require("../../assets/images/keystonedigital.png")} alt="KD" height="50"/>
              </a>
              <p className="portfolio-text">Keystone Digital Programming and I.T. Intern</p>
            </Card.Body>
            <Card.Body className="body-text">
              <a href="https://www.missouristate.edu">
                <img title="Missouri State University" src={require("../../assets/images/msu.png")} alt="MSU" height="50"/>
              </a>
              <p className="portfolio-text">Missouri State University Math Tutor</p>
            </Card.Body>
            <Card.Body className="body-text">
              <a href="https://www.mst.edu">
                <img title="Missouri University of Science and Technology" src={require("../../assets/images/mst.png")} alt="MST" height="50"/>
              </a>
              <p className="portfolio-text">M.S.T. Student Technical Assistant</p>
            </Card.Body>
            <Card.Body className="body-text">
              <a href="https://www.washington.k12.mo.us">
                <img title="Washington School District" src={require("../../assets/images/whs.png")} alt="WHS" height="50"/>
              </a>
              <p className="portfolio-text">Washington School District Computer Technician Intern</p>
            </Card.Body>
            <Card.Body className="body-text">
              <a href="http://www.eastcentral.edu">
                <img title="East Central College" src={require("../../assets/images/ecc.png")} alt="MSU" height="50"/>
              </a>
              <p className="portfolio-text">East Central College Math Tutor</p>
            </Card.Body>
            <Card.Body className="body-text">
              <a href="https://www.imospizza.com">
                <img title="Imos Pizza" src={require("../../assets/images/imos.png")} alt="Imos Pizza" height="50"/>
              </a>
              <p className="portfolio-text">Imos Pizza Pizza Maker</p>
            </Card.Body>
        </Card>
    );
}

// Education subsection for the portfolio page
export const Education = () => {
    return (
        <Card className="panel-border">
          <Card.Header>
            <Card.Title toggle className="section-text">
              Education
            </Card.Title>
          </Card.Header>
            <Card.Body className="body-text">
              <a href="https://www.missouristate.edu">
                <img title="Missouri State University" src={require("../../assets/images/msu.png")} alt="MSU" height="50"/>
              </a>
              <p className="portfolio-text">B.S. Computer Science from Missouri State University</p>
            </Card.Body>
            <Card.Body className="body-text">
              <a href="http://www.eastcentral.edu">
                <img title="East Central College" src={require("../../assets/images/ecc.png")} alt="ECC" height="50"/>
              </a>
              <p className="portfolio-text">A.A. Liberal Studies from East Central College</p>
            </Card.Body>
        </Card>
    );
}

// Certifications subsection for the portfolio page
export const Certifications = () => {
    return (
        <Card className="panel-border">
          <Card.Header>
            <Card.Title toggle className="section-text">
              Certifications
            </Card.Title>
          </Card.Header>
            <Card.Body >
              <a href="https://www.comptia.org">
                <img title="CompTIA Security+" src={require("../../assets/images/secplus.png")} alt="Security+" height="50"/>
              </a>
              <p >CompTIA Security+</p>
            </Card.Body>
            <Card.Body >
              <a href="https://www.comptia.org">
                <img title="CompTIA Network+" src={require("../../assets/images/netplus.png")} alt="Network+" height="50"/>
              </a>
              <p >CompTIA Network+</p>
            </Card.Body>
            <Card.Body>
              <a href="https://www.comptia.org">
                <img title="CompTIA A+" src={require("../../assets/images/aplus.png")} alt="A+" height="50"/>
              </a>
              <p >CompTIA A+</p>
            </Card.Body>
            <Card.Body >
              <a href="https://www.crla.net">
                <img title="CRLA Level One" src={require("../../assets/images/crla.png")} alt="CRLA" height="50"/>
              </a>
              <p >College Reading & Learning Association Level One Tutor</p>
            </Card.Body>
        </Card>
    );
}

// Software Projects subsection for the portfolio page
export const SoftwareProjects = () => {
    return (
        <Card className="panel-border">
          <Card.Header>
            <Card.Title toggle className="section-text">
              Software Projects
            </Card.Title>
          </Card.Header>
            <Card.Body className="body-text">
              <a href="https://www.express-scripts.com">
                <img title="Express Scripts" src={require("../../assets/images/esi.png")} alt="ESI" height="50"/>
              </a>
              <p className="portfolio-text">Corporate Finance Systems</p>
            </Card.Body>
            <Card.Body className="body-text">
              <a href="https://github.com/dmlause/website">
                <img title="Derek Lause" src={require("../../assets/images/headshot.png")} alt="Derek Lause" height="50"/>
              </a>
              <p className="portfolio-text">This website</p>
            </Card.Body>
            <Card.Body className="body-text">
              <a href="https://github.com/dmlause/CoMPES-GUI">
                <img title="Missouri State University" src={require("../../assets/images/msu.png")} alt="MSU" height="50"/>
              </a>
              <p className="portfolio-text">Senior Capstone - CoMPES GUI (IoT interface)</p>
            </Card.Body>
            <Card.Body className="body-text">
              <a href="https://github.com/dmlause/MSUHelp">
                <img title="Missouri State University" src={require("../../assets/images/msu.png")} alt="MSU" height="50"/>
              </a>
              <p className="portfolio-text">Class Project - Android App (MSU Help)</p>
            </Card.Body>
        </Card>
    );
}

/**
 * Proficient technology and skills :)
 * @returns {ProficientTechAndSkills}
 * @constructor
 */
export const ProficientTechAndSkills = () => {
    return (
        <Card>
          <Card.Header>
            <Card.Title toggle>
              Proficient Technologies & Skills
            </Card.Title>
          </Card.Header>
            <Card.Body>
              <p>HTML 5</p>
              <ProgressBar variant="success" now={90} />
              <p>ReactJS</p>
              <ProgressBar variant="success" now={90} />
              <p>Oracle SQL</p>
              <ProgressBar variant="success" now={90} />
              <p>Agile & SCRUM</p>
              <ProgressBar variant="success" now={90} />
              <p>Bootstrap Styling</p>
              <ProgressBar variant="success" now={90} />
              <p>Java Spring Boot</p>
              <ProgressBar variant="success" now={90} />
            </Card.Body>
        </Card>
    );
}