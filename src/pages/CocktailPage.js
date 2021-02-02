import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import misscocktail1 from '../assets/images/misscocktail1.png'
import misscocktail2 from '../assets/images/misscocktail2.png'
import misscocktail3 from '../assets/images/misscocktail3.png'

function CocktailPage(props){

  return(
      <div>
        <div className="home-hero-container">
          <Nav />
          <Hero title={props.title} />
        </div>
        <Content>
        <h2>Description</h2>
        This basic Ruby on Rails CRUD application with MVC pattern was designed(minimally),
        implemented and shipped to production in 2 days. It was my first Rails project during
        Le Wagon coding bootcamp. The database has a simple one to many relationship. A user is
        able to create a cocktail, while uploading an image and adding ingredients, update the
        ingredients, visit each cocktail recipe, remove a cocktail and its ingredients/image.
        A basic reviews controller was also added, belonging to a cocktail. The application was
        deployed to Heroku.
        </Content>

        <Container fluid={true}>
          <Row className="justify-content-center">
          <Col md={8}>
         <Carousel>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img text-center"
                src={misscocktail1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={misscocktail2}
                alt="Third slide"
              />
          </Carousel.Item>
          <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={misscocktail3}
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
        <li><b>IMAGE UPLOAD:</b> The Cloudinary gem was added in order to enable image uploading. </li>
        <li><b>REVIEWS:</b> A reviews model was added with a view to create a new review belonging to a cocktail. </li>
        </ul>
        </Content>

    </div>
    );


}

export default CocktailPage;
