import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './App.css';

import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'

function App() {
  
  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']

  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>

          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Nav.Link as={Link} to="/" eventKey={"homePage"}> 
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link as={Link} to="/about" eventKey={"aboutPage"}> 
                  About Us
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item >
                  <Nav.Link eventKey={"aboutPage"}> 
                      <Link to="/about">About Us</Link>
                  </Nav.Link>
              </Nav.Item> */}
              <Nav.Item >
                <Nav.Link as={Link} to="/packages" eventKey={"packagesPage"}> 
                  Our Packages 
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>

        </header>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/packages" render={() => <Packages packages={packages}/>}  />
        </div>

      </Router>

    </div>
  );
}

export default App;