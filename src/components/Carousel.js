import React from 'react'

import Card from './Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import portfolio from '../assets/images/portfolio1.png';
import spotitunes from '../assets/images/spotitunes1.png';
import counterargument from '../assets/images/counterargument1.png';
import equipy from '../assets/images/equipy1.png';
import misscocktail from '../assets/images/misscocktail1.png';


class Carousel extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items:[
        {
        id:0,
        title: "This Portfolio",
        imgSrc: portfolio,
        link: "link",
        selected: false
      },
      {
        id:1,
        title: "Pwovèb Kreyòl",
        imgSrc: portfolio,
        link: "link",
        selected: false
      },
      {
        id:2,
        title: "SpotiTunes",
        imgSrc: spotitunes,
        link: "link",
        selected: false
      },
      {
        id:3,
        title: "CounterArgument",
        imgSrc: counterargument,
        link: "link",
        selected: false
      },
      {
        id:4,
        title: "Rent Equipy",
        imgSrc: equipy,
        link: "link",
        selected: false
      },
      {
        id:5,
        title: "Miss Cocktail",
        imgSrc: misscocktail,
        link: "link",
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
