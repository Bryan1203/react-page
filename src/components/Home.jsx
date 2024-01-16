import { Col, Container, Button, Row, Image } from "react-bootstrap"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import headshot from "../assets/_figures/bryan.png"

const Home = () => {
    const [showImage, setShowImage] = useState(window.innerWidth > 770);


    useEffect(() => {
        const handleResize = () => {
        setShowImage(window.innerWidth > 770);
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <Container className="background">
        <Container>
            <Row>
                <Col xs={12} md={7}>
                <div style={{marginLeft:'60px'}}>
                <h1 className='taviraj-bold' style={{marginTop:'70px', fontSize:'60px'}}>Bryan Chang</h1>
                    <p className='taviraj-medium'>
                    I'm Bryan, a junior in Computer Engineering at the University of Illinois, 
                    Urbana Champaign. I'm passionate about the Internet of Things, specializing in C++ and Python 
                    for image recognition. Beyond tech, I find joy in cycling, weight lifting, practicing Brazilian 
                    Jiu-Jitsu, and immersing myself in the world of video games. What sets me apart are my adventurous 
                    pursuits—I've cycled across the US and experienced the exhilaration of skydiving.
                    </p>
                    <div>
                        <Link to="/projects">
                            <Button className='taviraj-bold' variant="outline-dark" style={{marginRight:'20px'}}>Illini 4000 Bike Trip Across the US</Button>
                        </Link>
                        <Button className='taviraj-bold' variant="outline-dark" >View My Projects</Button>
                    </div>

                </div>                    
                </Col>
                <Col xs={12} md={5} style={{marginTop:'7px'}}>
                    {showImage && (
                        <Image 
                        className="responsive-headshot" 
                        src={headshot} 
                        alt="headshot" 
                        rounded 
                        style={{height: '700px', marginTop: '40px', filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5))' }}
                        />
                    )}
                </Col>
            </Row>
        </Container>
    
        
    </Container>
}
export default Home