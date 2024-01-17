import { Button, Card, Col, Container, Image, ListGroup, Nav, Navbar, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Life from './Life';
import Home from './Home';
import Blog from './Blog';
import Resume from '../assets/documents/Bryan_Chang_Resume.pdf'

const Homepage = () => {
    return <Container style={{marginTop:'20px'}}>
        <BrowserRouter basename='/react-page/'>
            <Navbar style={{marginTop: '-20px'}}>
                <Container className="Nav-text">
                    <Nav className='me-auto'>
                    <Nav.Link as={Link} to="/home" className='navLink'><h5>Home</h5></Nav.Link>
                    <Nav.Link as={Link} to="/life" className='navLink' ><h5>Life</h5></Nav.Link>
                    <Nav.Link as={Link} to="/blog" className='navLink' ><h5>Blog</h5></Nav.Link>
                    </Nav>
                    <a href={Resume} target="_blank">
                    <Button variant="success" style={{marginTop:'20px', marginBottom:'20px', marginLeft: '12px'}}>Download Resume</Button>
                    </a>
                    <a href="mailto:bryanchang1234@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="success" style={{marginTop:'20px', marginBottom:'20px', marginLeft:'20px'}}>Email me</Button>
                    </a>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/life" element={<Life />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </Container>
}

export default Homepage