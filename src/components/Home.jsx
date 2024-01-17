import { Col, Container, Button, Row, Image, Card } from "react-bootstrap"
import React, { useState, useEffect, useRef } from 'react';
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



    const scrollToSecondComponent = () => {
        secondComponentRef.current.scrollIntoView({behavior:'smooth'})
    };
    const secondComponentRef = useRef(null);

    

    return <div>
        <div className="background">
            <Row>
                <Col xs={12} md={7}>
                <div className='Home-text'>
                <h1 className='taviraj-bold'>Bryan Chang</h1>
                    <p className='taviraj-medium'>
                    I'm Bryan, a junior in Computer Engineering at the University of Illinois, 
                    Urbana Champaign. I'm passionate about the Internet of Things, specializing in C++ and Python 
                    for image recognition. Beyond tech, I find joy in cycling, weight lifting, practicing Brazilian 
                    Jiu-Jitsu, and immersing myself in the world of video games. What sets me apart are my adventurous 
                    pursuits—I've cycled across the US and experienced the exhilaration of skydiving.
                    </p>
                    <div>
                        <Link to="/life">
                            <Button className='taviraj-bold' variant="outline-dark" style={{marginRight:'20px', marginTop:'10px'}}>Illini 4000 Bike Trip Across the US</Button>
                        </Link>
                        <Button className='taviraj-bold' variant="outline-dark" style={{marginTop:'10px'}}onClick={scrollToSecondComponent}>View My Projects</Button>
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
                        style={{height: '700px', marginTop: '60px', filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.5))' }}
                        />
                    )}
                </Col>
            </Row>
            <div className='centered-container' ref={secondComponentRef}>
            <h1 className="taviraj-bold">Projects</h1>
            <p className="taviraj-medium">To see the effect of sticky positioning, select the position: sticky option and scroll 
                this container. The element will scroll along with its container, until it is at the top of 
                the container (or reaches the offset specified in top), and will then stop scrolling, so it stays 
                visible. The rest of this text is only supplied to make sure the container overflows, so as to enable 
                you to scroll it and see the effect. Far out in the uncharted backwaters of the unfashionable end of 
                the western spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this at a distance of 
                roughly ninety-two million miles is an utterly insignificant little blue green planet whose ape-descended 
                life forms are so amazingly primitive that they still think digital watches are a pretty neat idea.</p>
            </div>
        </div>
    </div>
}
export default Home