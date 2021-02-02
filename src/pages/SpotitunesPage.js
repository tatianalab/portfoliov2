import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/Hero'
import Content from '../components/Content'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import spotitunes1 from '../assets/images/spotitunes1.png'
import spotitunes2 from '../assets/images/spotitunes2.png'
import spotitunes3 from '../assets/images/spotitunes3.png'

function SpotitunesPage(props){

  return(
      <div>
        <div className="home-hero-container">
          <Nav />
          <Hero title={props.title} />
        </div>
        <Content>
        <h2>Description</h2>
        This project was built as part of a Codecademy challenge in their React
        curriculum. It was designed, implemented and deployed to Surge in 2 days.
        This front-end React app uses the Spotify API. It is built with 7 class
        components, with state being in the App component. Using the SearchBar component,
        a user must be signed-in to their Spotify account in order to search for tracks,
        artists or albums which once fetched are displayed as Track components in the
        TrackList components. The Tracklist component is rendered in both the SearchResults
        component and the PlayList component. A user can add Tracks from SearchResults
        to PlayList. Tracks can also be removed from the PlayList. The new state of the
        PlayList can then be named and saved to the Spotify account of the user.
        </Content>

        <Container fluid={true}>
          <Row className="justify-content-center">
          <Col md={8}>
         <Carousel>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img text-center"
                src={spotitunes1}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={spotitunes2}
                alt="Third slide"
              />
          </Carousel.Item>
          <Carousel.Item className="justify-content-center">
              <img
                className="d-block carousel-img"
                src={spotitunes3}
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
        <li><b>SEARCH:</b>Once the user's access token is verified, the search function using a term as argument, fetches track uris from Spotify API.</li>
        <li><b>ADDING/REMOVING:</b>While a track is not yet in the PlayList, a user can add it. A track in the PlayList can be removed.</li>
        <li><b>SAVING TO SPOTIFY:</b>Once a PlayList component has a name and trackUris argument, it can be saved using a POST method to the Spotify API.</li>
        </ul>
        </Content>
    </div>
    );


}

export default SpotitunesPage;
