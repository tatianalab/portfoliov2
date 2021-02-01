import React from 'react'
import Hero from '../components/Hero/Hero'
import Carousel from '../components/Carousel'
import Nav from '../components/Nav/Nav'

function HomePage(props){

  return(
    <div>
      <div className="home-hero-container">
      <Nav />
      <Hero title={props.title} subTitle={props.subTitle} text={props.text}/>
      </div>
      <div className="carousel-container">
      <Carousel />
      </div>
    </div>
    );

}

export default HomePage;
