import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container'


import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
import PwovebPage from './pages/PwovebPage'
import CocktailPage from './pages/CocktailPage'
import EquipyPage from './pages/EquipyPage'
import CounterArgumentPage from './pages/CounterArgumentPage'
import SpotitunesPage from './pages/SpotitunesPage'
import AshtongagnonPage from './pages/AshtongagnonPage'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "Tatiana Labrousse",
      headerLink: [
      {title:'Home', path: '/'},
      {title:'Projects', path: '/projects'},
      {title:'About', path: '/about'},
      {title:'Contact', path: '/contact'}
      ],
      home: {
        title: 'Bonjour, I\'m a front-end developer',
        subTitle: "Building clean, elegant, responsive web apps",
        text: "Check out some of my projects below"
      },
      about: {
        title: 'More about me',
      },
      contact: {
        title: 'Get in touch',
        text: "Whether you want to hire me, collaborate, or just have a zoom coffee...fill out the form. I will get back to you asap!"
      },
      portfolio: {
        title: 'This Portfolio',
      },
      pwoveb: {
        title: 'Pwovèb Kreyòl',
      },
      cocktail: {
        title: 'Miss Cocktail',
      },
      equipy: {
        title: 'Rent Equipy',
      },
      counterargument: {
        title: 'CounterArgument',
      },
       spotitunes: {
        title: 'Spotitunes',
      },
      ashtongagnon: {
        title: 'Ashton Gagnon Avocats',
      },
    }
  }

  render(){
    return(
      <Router>
        <Container className="p-0" fluid={true}>

            <Switch>
              <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
              <Route path="/about" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
              <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} />
              <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title}/>} />
              <Route path="/pwoveb" render={() => <PwovebPage title={this.state.pwoveb.title} />} />
              <Route path="/cocktail" render={() => <CocktailPage title={this.state.cocktail.title} />} />
              <Route path="/equipy" render={() => <EquipyPage title={this.state.equipy.title} />} />
              <Route path="/counterargument" render={() => <CounterArgumentPage title={this.state.counterargument.title} />} />
              <Route path="/spotitunes" render={() => <SpotitunesPage title={this.state.spotitunes.title} />} />
              <Route path="/ashtongagnon" render={() => <AshtongagnonPage title={this.state.ashtongagnon.title} />} />
            </Switch>

          <Footer />

      </Container >
      </Router>
      )
  }

}


export default App;
