import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import equipy1 from '../assets/images/equipy1.png'
import equipy2 from '../assets/images/equipy2.png'
import equipy3 from '../assets/images/equipy3.png'
import equipy4 from '../assets/images/equipy4.png'

function EquipyPage(props){

  return(
      <div>
        <div className="home-hero-container">
          <Nav />
          <Hero title={props.title} />
        </div>
        <Content>
        <h2>Description</h2>
        Rent Equipy is a marketplace/Airbnb clone that was designed, implemented
        and shipped to production in 5 days as part of the
        Le Wagon curriculum. It was built using Ruby On Rails and MVC architecture
         (model, view, controller). We worked as a SCRUM team of 4 people on this
         short sprint. This marketplace allows a user to book sporting equipment
         from other users and offer their own as well.
        </Content>

        <Container fluid={true}>
          <Row className="justify-content-center">
          <Col md={8}>
         <Carousel>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img text-center"
                src={equipy1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={equipy2}
                alt="Third slide"
              />
          </Carousel.Item>
          <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={equipy3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={equipy4}
                alt="Third slide"
              />
            </Carousel.Item>
        </Carousel>
        </Col>
      </Row>
    </Container>



        <Content>
        <h2>Features</h2>
        <ul>
        <li><b>SEARCH:</b> The PG search gem was added to enable a user to search by keyword for available equipment.</li>
        <li><b>AUTHENTICATION & AUTHORIZATION:</b>the Devise gem was used to Authentication and the Pundit gem for authorization. A user cannot book their own equipment or edit another user's information. </li>
        <li><b>IMAGE SCROLL:</b>The Cloudinary gem was added and multiple image upload enabled. Image scroll was added to each equipment show page.</li>
        <li><b>BOOKING CALENDAR:</b>A user can request to book through a booking calendar.</li>
       <li><b>REVIEWS:</b>A user can give a written and star review to each equipment.</li>
       <li><b>NOTIFICATIONS:</b>A user receives a notification when their equipment has a requested booking.</li>
        </ul>
        </Content>
    </div>
    );


}

export default EquipyPage;
