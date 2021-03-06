import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import profile1 from '../assets/images/profile1.png'
import profile2 from '../assets/images/profile2.png'
import profile3 from '../assets/images/profile3.png'
import profile4 from '../assets/images/profile4.png'

function PortfolioPage(props){

  return(
<div>
        <div className="home-hero-container">
          <Nav />
          <Hero title={props.title} />
        </div>
        <Content>
        <h2>Description</h2>
        I am using my portfolio website as a sandbox to test out everything I am learning in React
        little by little. It is a SPA using React Router. Most of the components are hookless functions,
        the App and projects "Carousel" are class components storing state. The Nav is a Hook component with useState
        to determine whether or not to open the mobile nav.
        I use the React Spring animation library to show project details onClik. I decided to use React Bootstrap for the
        image carousel on each project page, as well as for the structure of the contact form. I am currently working on adding more
        animation, nested routes and translating to french with i18n. Coming soon!
        </Content>

        <Container fluid={true}>
          <Row className="justify-content-center">
          <Col md={8}>
         <Carousel>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img text-center"
                src={profile1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={profile2}
                alt="Third slide"
              />
          </Carousel.Item>
          <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={profile3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={profile4}
                alt="Third slide"
              />
            </Carousel.Item>
        </Carousel>
        </Col>
      </Row>
    </Container>


    </div>
    );


}

export default PortfolioPage;
