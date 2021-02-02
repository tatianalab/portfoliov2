import React from 'react'
import {Link} from 'react-router-dom';

import Card from './Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import profile from '../assets/images/profile1.png';
import pwoveb from '../assets/images/pwoveb1.png';
import spotitunes from '../assets/images/spotitunes1.png';
import counterargument from '../assets/images/counterargument1.png';
import equipy from '../assets/images/equipy1.png';
import misscocktail from '../assets/images/misscocktail1.png';
import react from '../assets/images/react.svg';
import bootstrap from '../assets/images/bootstrap.svg';
import css from '../assets/images/css-icon.svg';
import github from '../assets/images/github-icon.svg';
import heroku from '../assets/images/heroku.svg';
import html from '../assets/images/html-icon.svg';
import javascript from '../assets/images/javascript.svg';
import rails from '../assets/images/rails.svg';
import ruby from '../assets/images/ruby.svg';
import sass from '../assets/images/sass.svg';
import surge from '../assets/images/surge.svg';
import webpack from '../assets/images/webpack.svg';

class Carousel extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items:[
        {
        id:0,
        title: "This Portfolio",
        imgSrc: profile,
        tools: [react, webpack, css, bootstrap],
        link: "http://tatianalab.dev",
        path:"/portfolio",
        selected: false
      },
      {
        id:1,
        title: "Pwovèb Kreyòl",
        imgSrc: pwoveb,
        tools: [react, webpack, css],
        link: "http://pwovebkreyol.netlify.app",
        path:"/pwoveb",
        selected: false
      },
      {
        id:2,
        title: "SpotiTunes",
        imgSrc: spotitunes,
        tools: [react, webpack, css,surge],
        link: "http://spotitunes.surge.sh/",
        path:"/spotitunes",
        selected: false
      },
      {
        id:3,
        title: "CounterArgument",
        imgSrc: counterargument,
        tools: [ruby, rails, sass, javascript, heroku],
        link: "http://www.counterargument.ca/",
        path:'/counterargument',
        selected: false
      },
      {
        id:4,
        title: "Rent Equipy",
        imgSrc: equipy,
        tools: [ruby,rails,sass,javascript,heroku],
        link: "http://rent-equipy.herokuapp.com/",
        path:'/equipy',
        selected: false
      },
      {
        id:5,
        title: "Miss Cocktail",
        imgSrc: misscocktail,
        tools:[ruby,rails,sass,javascript,heroku],
        link: "https://tati-misscocktail.herokuapp.com/",
        path:'/cocktail',
        selected: false
      }

      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;
    items.forEach(item => {
      if(item.id !== id){
        item.selected = false;
      }
    });
    this.setState({
      items
    })
  }

  makeItems(items){
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render(){
    return(
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
  )

  }


}

export default Carousel;
