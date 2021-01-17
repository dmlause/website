import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {ProficientTechAndSkills} from './PortfolioSubsections';


const Portfolio = props => {
    document.title = "Derek Lause | Portfolio";

    return (
        <>
            <Row className="portfolio-page">
                <Col md={{span: 6, offset: 3}}>
                    <h2>
                        Welcome to my portfolio!
                    </h2>
                    <ProficientTechAndSkills/>
                </Col>
            </Row>
        </>
    );
};

export default withRouter(Portfolio);
// export default class Portfolio extends React.Component {
//   render() {
//     return (
//       <Container fluid>
//         <Row className="portfolio-row">
//           <Col xs={12} md={6} mdOffset={3}>
//             <Row>
//               <h2>
//                 Welcome to  my portfolio! Images below have links for more information.
//                 If one wishes to view my résumé, please <a href="/contact">contact</a> me.
//               </h2>
//               <WorkExperience/>
//               <Education/>
//               <Certifications/>
//               <SoftwareProjects/>
//               <ProficientTechAndSkills/>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     );
//   };
// }
