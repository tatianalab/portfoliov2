import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import counterargument1 from '../assets/images/counterargument1.png'
import counterargument2 from '../assets/images/counterargument2.png'
import counterargument3 from '../assets/images/counterargument3.png'
import counterargument4 from '../assets/images/counterargument4.png'

function CounterArgumentPage(props){

  return(
      <div>
        <div className="home-hero-container">
          <Nav />
          <Hero title={props.title} />
        </div>
        <Content>
        <h2>Description</h2>
        This MVP was designed, implemented and shipped to production in a 10 day sprint,
        using Ruby On Rails and MVC architecture (model, view, controller), as my final
        project for Le Wagon coding bootcamp. We worked as a SCRUM team of 4 people, taking
        turns at developing and implementing different features. CounterArgument is an app
        where a user can search for short, clear and sourced counterarguments and/or give
        counters to arguments that were provided by the community. The DB has a many to many
        relationship, with an argument being/having a parent argument, and thus also being/having a
        child argument. I was mostly responsible for designing the Figma prototype and implementing
        this design to the front-end of the app, although I did touch on multiple aspects of our project.
        </Content>

        <Container fluid={true}>
          <Row className="justify-content-center">
          <Col md={8}>
         <Carousel>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img text-center"
                src={counterargument1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={counterargument2}
                alt="Third slide"
              />
          </Carousel.Item>
          <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={counterargument3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={counterargument4}
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
        <li><b>SEARCH:</b> The AlgoliaSearch gem was added to enable a user to search by keyword or sentence for topics or existing arguments</li>
        <li><b>TOPIC TAGGING:</b>While adding a new argument, a user is able to tag multiple new or existing topics. </li>
        <li><b>UPVOTING:</b>A user is able to upvote another user's argument as funny, accurate or well-sourced. Users cannot upvote their own arguments.</li>
        <li><b>NOTIFICATIONS:</b>A user receives a notification when one of their arguments is upvoted or countered.</li>
       <li><b>GAMIFICATION:</b>A badge system was added attached to number of votes. A user receives different badges based on the type and number of upvotes on their arguments.</li>
       <li><b>ANONIMITY:</b>A user can counter or add an argument anonymously, or change a submitted argument to anonymous.</li>
        </ul>
        </Content>
    </div>
    );


}

export default CounterArgumentPage;
