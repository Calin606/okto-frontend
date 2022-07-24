import  React from 'react';
import './App.css';

import { Container, Row, Jumbotron, Col } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainNavigation from './Components/MainNavigation';
import MainCarousel from './Components/MainCarousel';
import HomeCanvas from './Components/HomeCanvas';
import Footer from './Components/Footer';
import NFT from './Components/NFT/NFT';
import NFTList from './Components/NFT/NFTList';

function App() {

  const marginTop = {
    marginTop: "20px"
  };

  return (
    <Router>
      <MainNavigation/>
      <MainCarousel/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={HomeCanvas}/>
              <Route path="/nft" exact component={NFT}/>
              <Route path="/nftlist" exact component={NFTList}/>
            </Switch>
          </Col>
        </Row>
      </Container>

      
      
      <Footer/>
    </Router>
  );
}

export default App;
