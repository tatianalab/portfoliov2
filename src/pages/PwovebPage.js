import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import pwoveb1 from '../assets/images/pwoveb1.png'
import pwoveb2 from '../assets/images/pwoveb2.png'
import pwoveb3 from '../assets/images/pwoveb3.png'

function PwovebPage(props){

  return(
    <div>
    <div className="home-hero-container">
          <Nav />
          <Hero title={props.title} />
        </div>
        <Content>
        <h2>Description</h2>
        This is a Haitian Creole Quote generator with search, which was create and deployed
        to netlify in 2 days. I am Haitian, and I
        found the freeCodeCamp random quote generator challenge a bit dull.
        I decided to personalize this challenge a bit. I started out by scraping a few
        websites with Haitian quotes and transformed my CSV to a JSON for my Data(API coming soon).
        The button onClick generates a random quote from my Data. I also added a random background color
        change function onClick, which depending on the RGB value, changes the header colors between black
        and white. The search function was enabled using Regex exec() and filter() methods once the search term.length > 1,
        like so:
        <p>
        <code>
         pwovebs: this.state.allPwovebs.filter((pwoveb) => new RegExp(event.target.value, "i").exec(pwoveb.pwoveb))
        </code>
        </p>

        </Content>
        <Container fluid={true}>
          <Row className="justify-content-center">
          <Col md={8}>
         <Carousel>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img text-center"
                src={pwoveb1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={pwoveb2}
                alt="Third slide"
              />
          </Carousel.Item>
          <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={pwoveb3}
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
        <li><b>SEARCH:</b>The user can search for a quote by typing a term into the search bar.</li>
        <li><b>RANDOM GENERATOR:</b>The user can generate a random quote by clicking the button.</li>
        <li><b>QUOTE STATE CHANGE:</b>The State of the displayed quote changes when the user clicks on a quote from the search results.</li>
        <li><b>COLOR CHANGE:</b>A random background color is generated when the user the state of the displayed quote is updated.</li>
        <li><b>SOCIAL SHARE:</b>A user can share the displayed quote on Facebook or Twitter.</li>
        </ul>
        </Content>
    </div>
    );

}

export default PwovebPage;
