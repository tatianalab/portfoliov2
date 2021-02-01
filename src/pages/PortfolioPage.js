import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content'

function PortfolioPage(props){

  return(
      <div>
        <div className="home-hero-container">
          <Nav />
          <Hero title={props.title} />
        </div>
        <Content>
        <h2>Description</h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Assumenda culpa rem ab nisi repudiandae minima,
        sint consequatur nobis natus, nostrum nihil vel laudantium quas
        ex non aspernatur vitae soluta itaque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Assumenda culpa rem ab nisi repudiandae minima,
        sint consequatur nobis natus, nostrum nihil vel laudantium quas
        ex non aspernatur vitae soluta itaque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Assumenda culpa rem ab nisi repudiandae minima,
        sint consequatur nobis natus, nostrum nihil vel laudantium quas
        ex non aspernatur vitae soluta itaque.
        <h2>Features</h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Assumenda culpa rem ab nisi repudiandae minima,
        sint consequatur nobis natus, nostrum nihil vel laudantium quas
        ex non aspernatur vitae soluta itaque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Assumenda culpa rem ab nisi repudiandae minima,
        sint consequatur nobis natus, nostrum nihil vel laudantium quas
        ex non aspernatur vitae soluta itaque.
        </Content>
    </div>
    );


}

export default PortfolioPage;
