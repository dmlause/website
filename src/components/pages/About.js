import React from 'react';
import {Row, Col} from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <h2>Hi, I'm Derek Lause.</h2>
            <div>
              <p>
                I am a self-motivated full stack software engineer, as well as a leader and mentor for a team of software engineers.-
                Checkout my blog content about everything technology
                This website consists of written <a href='https://dlause.blogspot.com' className="about-link">content</a> of mine,
                a <a href='/portfolio' className="about-link">portfolio</a> of my current work, and a <a href='/shop' className="about-link">store</a>.
                If one would wish to contact me, please visit the <a href='/contact' className="about-link">contact page</a>.
                Follow me on <a href="https://linkedin.com/in/dereklause/" className="about-link">LinkedIn</a>, <a href="https://github.com/dmlause" className="about-link">GitHub</a>,
                  <a href="https://twitter.com/dmlause" className="about-link">Twitter</a>, and <a href="https://youtube.com/channel/UCNoAX-XqNBMlP7CkEYgewVg" className="about-link">YouTube</a>!
              </p>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default About;