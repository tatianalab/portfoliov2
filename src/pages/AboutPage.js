import React from 'react'
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props){

  return(
    <div>
      <Hero title={props.title} />
      <Content>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda culpa rem ab nisi repudiandae minima, sint consequatur nobis natus, nostrum nihil vel laudantium quas ex non aspernatur vitae soluta itaque.
      </Content>
    </div>
    );

}

export default AboutPage;
