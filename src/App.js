import './App.css';
import React from 'react'
import Container from 'react-bootstrap/Container'

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PortfolioPage from './pages/PortfolioPage'
import PwovebPage from './pages/PwovebPage'

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
        title: 'Bonjour, I\'m a Front-end Developer',
        subTitle: "Building clean, elegant, responsive web apps",
        text: "Check out some of my projects below"
      },
      projects: {
        title: 'Selected Projects',
      },
      about: {
        title: 'More about me',
      },
      contact: {
        title: 'Get in touch',
      },
      portfolio: {
        title: 'This Portfolio',
      },
    }
  }

  render(){
    return(
      <Router>
        <Container className="p-0" fluid={true}>

            <Switch>
              <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
              <Route path="/projects" render={() => <ProjectsPage title={this.state.projects.title} subTitle={this.state.projects.subTitle} text={this.state.projects.text} />} />
              <Route path="/about" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} text={this.state.about.text} />} />
              <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} text={this.state.contact.text} />} />
              <Route path="/portfolio" render={() => <PortfolioPage title={this.state.portfolio.title}/>} />
              <Route path="/pwoveb" render={() => <PwovebPage />} />
            </Switch>

          <Footer />

      </Container >
      </Router>
      )
  }

}


export default App;
