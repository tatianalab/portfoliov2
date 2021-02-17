import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ag1 from '../assets/images/ashtongagnon1.png'
import ag2 from '../assets/images/ashtongagnon2.png'
import ag3 from '../assets/images/ashtongagnon3.png'
import ag4 from '../assets/images/ashtongagnon4.png'

function PwovebPage(props){

  return(
    <div>
    <div className="home-hero-container">
          <Nav />
          <Hero title={props.title} />
        </div>
        <Content>
        <h2>Description</h2>
        This client website was transformed from a wordpress elementor site to a
        React SPA. It was redesigned, built and deployed to netlify in 5 days.
        I made use of react styled components and data files in order to reuse
        a similar general styles on multiple components.
        The most challenging aspect was getting the hang of working with i18next for internalization
        between french and english. For example the custom built FAQ Accordion component
        has to map through the translated JSON files and hit the proper object keys:
        <p>
        <code>
        {"AccordionData = t('AccordionData', {returnObjects:true})"}</code></p>
        <p><code>
        {" AccordionData.map((item, index) => {return (<Wrap onClick={() => toggle(index)} key={index}><h4>{item.question}</h4><span>{clicked === index ? <FiMinus /> : <FiPlus />}</span></Wrap>{clicked === index ? (<Dropdown><p>{item.answer}</p>"}
        </code></p>



        </Content>
        <Container fluid={true}>
          <Row className="justify-content-center">
          <Col md={8}>
         <Carousel>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img text-center"
                src={ag1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={ag2}
                alt="Third slide"
              />
          </Carousel.Item>
          <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={ag3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={ag4}
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
        <li><b>REACT i18Next MULTI-LANG:</b>Site translation enabled with i18next. Two locale json files contain all the text content of the site and are called depending on user preference.</li>
        <li><b>REACT SMOOTH SCROLL:</b>React smooth scroll enables scroll to different components and back to top on page change.</li>
        <li><b>REACT STYLED COMPONENTS:</b>All components are reusable styled components.</li>
        <li><b>EAMILJS INTEGRATION:</b>The contact form is connected to emailjs in order to function.</li>
        </ul>
        </Content>
    </div>
    );

}

export default PwovebPage;
