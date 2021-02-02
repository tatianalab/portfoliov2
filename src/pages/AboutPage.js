import React from 'react'
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';
import Content from '../components/Content';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card'
import tatiana from '../assets/images/tatianalabrousse.png'

function AboutPage(props){

  return(
    <div>
    <div className="home-hero-container">
      <Nav/>
      <Hero title={props.title} />
      </div>
      <Container fluid={true}>
        <Row className="mt-5">
          <Col sm={12} md={6} className="mt-2">
            <Image src={tatiana} roundedCircle thumbnail />
          </Col>
          <Col sm={12} md={6} className="mt-5">
          <Accordion defaultActiveKey="0">

          <Card >
            <Accordion.Toggle as={Card.Header} eventKey="0" className="accordion-card-header">
             <h5> Languages, Libraries, Frameworks and Tools</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
               I have decent knowledge of Html5, CSS3, vanilla Javascript and ES6,
               Ruby, SQL. I know how to use the command line, Git and Github, Webpack
               and Yarn. I can work with JQuery, Sass, React, Rails, ActiveRecord and
               PostgreSQL. I do the doodling on Photoshop and Figma.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1" className="accordion-card-header">
             <h5> Background and Path</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>My background is in Management and Marketing. I have always been
              the techy at my jobs. I started learning to code on my own and building
              static sites for friends and family, before joining Le Wagon bootcamp and
              graduating in December 2020.</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2" className="accordion-card-header">
              <h5>What I learned at Le Wagon</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>ALOT! The curriculum is designed so as to make students understands
              how to build and deploy an MVP Ruby on Rails app in 9 weeks. Along the way I
              learned in random order: Ruby (of course), Object Oriented Programming, the MVC pattern,
              Javascript and ES6 in a front-end approach, the basics of front-end and adding
              front-end to a rails project, the Agile way of life, developing user stories,
              designing a prototype on Figma and sticking said prototype, debugging, debugging,
              debugging and deploying to Heroku</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3" className="accordion-card-header">
              <h5>What I am learning these days</h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>I am currently digging deeper into React and striving to become a
              full-stack MERN developer. I am turning old client wordpress (elementor) sites
              into React SPAs while working on some personal projects involving wine and tech.
              More projects will undoubtedly be added shortly.</Card.Body>
            </Accordion.Collapse>
          </Card>

        </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
    );

}

export default AboutPage;
