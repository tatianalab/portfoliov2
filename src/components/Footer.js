import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

function Footer(){

  return(
    <footer className='mt-5 footer'>
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
          <i className="fab fa-github" />
          <i className="fab fa-linkedin" />
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            <p>Designed and Built by Tatiana Labrousse</p>
          </Col>
        </Row>
      </Container>

    </footer>
    )
}


export default Footer;
