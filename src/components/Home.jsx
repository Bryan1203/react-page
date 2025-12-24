import { Col, Container, Button, Row, Image, Card, Badge } from "react-bootstrap"
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
    const scrollToExperience = () => {
        experienceRef.current.scrollIntoView({behavior:'smooth'})
    };
    const secondComponentRef = useRef(null);
    const experienceRef = useRef(null);

    const projects = [
        {
            title: "High-Precision LiDAR-Inertial Localization",
            period: "Spring 2025",
            organization: "AI Racing Tech - Project Lead",
            description: "Developed ROS2-based localization system achieving 30cm accuracy vs RTK-GNSS ground truth using DLIO framework with IMU pre-integration, GICP scan matching, and GLIM mapping.",
            technologies: ["ROS2", "LiDAR", "IMU", "SLAM", "C++"],
            achievements: ["30cm localization accuracy", "RTK-GNSS ground truth validation"]
        },
        {
            title: "LiDAR-Based Lane Navigation",
            period: "Fall 2024",
            github: "https://github.com/Bryan1203/LiDAR-Based-Lane-Navigation",
            description: "Implemented end-to-end autonomous navigation system using Point Transformer V3 for lane detection, KISS-ICP SLAM with temporal fusion, and Pure Pursuit + adaptive PID control. Deployed on Polaris GEM e2/e4 autonomous vehicles.",
            technologies: ["PyTorch", "Point Cloud", "SLAM", "ROS2", "Computer Vision"],
            achievements: ["300-400ms real-time performance", "Deployed on autonomous vehicles"]
        },
        {
            title: "Robotic Pick-and-Place Automation",
            period: "Spring 2025",
            organization: "Ember Robotics",
            description: "Programmed Techman TM12 robot arm for automated glass slide handling with sub-millimeter precision using MoveIt framework in ROS2.",
            technologies: ["ROS2", "MoveIt", "Robot Manipulation", "Python"],
            achievements: ["Sub-millimeter precision", "Production deployment"]
        },
        {
            title: "UCB Advanced Robotics Project",
            period: "2024-2025",
            github: "https://github.com/Bryan1203/UCB_206A_fp_webpage",
            description: "Advanced robotics research project at UC Berkeley focusing on motion planning and control systems.",
            technologies: ["ROS", "Motion Planning", "Control Systems", "Python"]
        }
    ];

    const experiences = [
        {
            title: "Autonomous Driving Software Engineer Intern",
            company: "Industrial Technology Research Institute (ITRI)",
            period: "Summer 2024, Summer 2025",
            achievements: [
                "Reduced labeling time by 99.7% (2 weeks → 1 hour)",
                "Improved 3D lane detection accuracy by 43%",
                "Enhanced dashed lane detection by 19%",
                "Developed custom annotation pipeline",
                "Curated 1,000+ labeled LiDAR scans",
                "Integrated new LiDAR sensor into production"
            ]
        },
        {
            title: "IoT Undergraduate Teaching Assistant",
            company: "University of Illinois Urbana-Champaign",
            period: "Fall 2024",
            achievements: [
                "Developed capstone showcase website",
                "Managed 22 high-quality project submissions",
                "Implemented peer recognition system",
                "Mentored students in IoT and embedded systems"
            ],
            link: "https://iot.cs.illinois.edu/capstone-showcase/fall-2024"
        }
    ];

    return <div>
        <div className="background">
            <Row>
                <Col xs={12} md={7}>
                <div className='Home-text'>
                <h1 className='taviraj-bold'>Bryan Chang</h1>
                    <p className='taviraj-medium' style={{fontSize: '1.1rem'}}>
                        Master's student at <strong>UC Berkeley</strong> (MEng EECS, May 2026) specializing in <strong>Robotics and Embedded Software</strong>.
                        Fung Fellowship recipient with expertise in autonomous driving, LiDAR processing, SLAM, and deep learning for computer vision.
                    </p>
                    <p className='taviraj-medium' style={{fontSize: '1rem', lineHeight: '2'}}>
                        Previously at <strong>UIUC</strong> (BS Computer Engineering with Honors, 3.79 GPA).
                        Passionate about advancing autonomous systems through cutting-edge perception, localization, and motion planning technologies.
                    </p>
                    <div className='mb-3'>
                        <Badge bg="primary" className='me-2 mb-2' style={{fontSize: '0.9rem'}}>Autonomous Driving</Badge>
                        <Badge bg="primary" className='me-2 mb-2' style={{fontSize: '0.9rem'}}>LiDAR & SLAM</Badge>
                        <Badge bg="primary" className='me-2 mb-2' style={{fontSize: '0.9rem'}}>ROS/ROS2</Badge>
                        <Badge bg="primary" className='me-2 mb-2' style={{fontSize: '0.9rem'}}>Deep Learning</Badge>
                        <Badge bg="primary" className='me-2 mb-2' style={{fontSize: '0.9rem'}}>Motion Planning</Badge>
                    </div>
                    <div>
                        <Button className='taviraj-bold' variant="outline-dark" style={{marginRight:'20px', marginTop:'10px'}} onClick={scrollToSecondComponent}>View My Projects</Button>
                        <Button className='taviraj-bold' variant="outline-dark" style={{marginTop:'10px'}} onClick={scrollToExperience}>Experience</Button>
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

            {/* Projects Section */}
            <div className='projects-section' ref={secondComponentRef}>
                <Container>
                    <h1 className="taviraj-bold text-center mb-4" style={{fontSize: '3rem', marginTop: '100px'}}>Featured Projects</h1>
                    <p className="taviraj-medium text-center mb-5" style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 3rem'}}>
                        Cutting-edge robotics and autonomous systems projects demonstrating expertise in perception, localization, and motion control.
                    </p>
                    <Row>
                        {projects.map((project, idx) => (
                            <Col xs={12} md={6} key={idx} className="mb-4">
                                <Card className="project-card h-100" style={{border: '2px solid #dee2e6', borderRadius: '12px'}}>
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-start mb-2">
                                            <Card.Title className="taviraj-bold" style={{fontSize: '1.5rem'}}>{project.title}</Card.Title>
                                        </div>
                                        <Card.Subtitle className="taviraj-medium text-muted mb-3">
                                            {project.period} {project.organization && `• ${project.organization}`}
                                        </Card.Subtitle>
                                        <Card.Text className="taviraj-regular" style={{lineHeight: '1.8'}}>
                                            {project.description}
                                        </Card.Text>
                                        <div className="mb-3">
                                            {project.technologies.map((tech, i) => (
                                                <Badge key={i} bg="secondary" className="me-2 mb-2">{tech}</Badge>
                                            ))}
                                        </div>
                                        {project.achievements && (
                                            <div className="mb-3">
                                                {project.achievements.map((achievement, i) => (
                                                    <div key={i} className="taviraj-medium" style={{fontSize: '0.9rem', color: '#28a745'}}>
                                                        ✓ {achievement}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Button variant="outline-primary" size="sm" className="taviraj-bold">
                                                    View on GitHub →
                                                </Button>
                                            </a>
                                        )}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>

            {/* Experience Section */}
            <div className='experience-section' ref={experienceRef}>
                <Container>
                    <h1 className="taviraj-bold text-center mb-4" style={{fontSize: '3rem', marginTop: '80px'}}>Professional Experience</h1>
                    <Row className="justify-content-center">
                        <Col xs={12} lg={10}>
                            {experiences.map((exp, idx) => (
                                <Card key={idx} className="experience-card mb-4" style={{border: '2px solid #dee2e6', borderRadius: '12px'}}>
                                    <Card.Body>
                                        <Row>
                                            <Col xs={12} md={8}>
                                                <Card.Title className="taviraj-bold" style={{fontSize: '1.5rem'}}>{exp.title}</Card.Title>
                                                <Card.Subtitle className="taviraj-semibold text-primary mb-3">{exp.company}</Card.Subtitle>
                                            </Col>
                                            <Col xs={12} md={4} className="text-md-end">
                                                <Badge bg="dark" className="taviraj-medium" style={{fontSize: '0.95rem'}}>{exp.period}</Badge>
                                            </Col>
                                        </Row>
                                        <div className="mt-3">
                                            {exp.achievements.map((achievement, i) => (
                                                <div key={i} className="taviraj-regular mb-2" style={{fontSize: '1rem'}}>
                                                    <span style={{color: '#007bff', fontWeight: 'bold'}}>▸</span> {achievement}
                                                </div>
                                            ))}
                                        </div>
                                        {exp.link && (
                                            <div className="mt-3">
                                                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                                    <Button variant="outline-primary" size="sm" className="taviraj-bold">
                                                        View Showcase →
                                                    </Button>
                                                </a>
                                            </div>
                                        )}
                                    </Card.Body>
                                </Card>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Key Achievements Section */}
            <div className='achievements-section'>
                <Container>
                    <h1 className="taviraj-bold text-center mb-4" style={{fontSize: '3rem', marginTop: '80px'}}>Key Achievements</h1>
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} lg={3} className="text-center mb-4">
                            <div className="achievement-box p-4" style={{background: '#f8f9fa', borderRadius: '12px'}}>
                                <h2 className="taviraj-bold text-primary">99.7%</h2>
                                <p className="taviraj-medium">Labeling Time Reduction</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="text-center mb-4">
                            <div className="achievement-box p-4" style={{background: '#f8f9fa', borderRadius: '12px'}}>
                                <h2 className="taviraj-bold text-primary">43%</h2>
                                <p className="taviraj-medium">Lane Detection Improvement</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="text-center mb-4">
                            <div className="achievement-box p-4" style={{background: '#f8f9fa', borderRadius: '12px'}}>
                                <h2 className="taviraj-bold text-primary">30cm</h2>
                                <p className="taviraj-medium">Localization Accuracy</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={3} className="text-center mb-4">
                            <div className="achievement-box p-4" style={{background: '#f8f9fa', borderRadius: '12px'}}>
                                <h2 className="taviraj-bold text-primary">Sub-mm</h2>
                                <p className="taviraj-medium">Robotic Precision</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Contact Section */}
            <div className='contact-section' style={{marginBottom: '100px'}}>
                <Container>
                    <h1 className="taviraj-bold text-center mb-4" style={{fontSize: '3rem', marginTop: '80px'}}>Get In Touch</h1>
                    <Row className="justify-content-center">
                        <Col xs={12} md={8} lg={6} className="text-center">
                            <p className="taviraj-medium mb-4" style={{fontSize: '1.1rem'}}>
                                Interested in robotics, autonomous systems, or collaboration opportunities? Let's connect!
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                <a href="mailto:bryan.chang@berkeley.edu">
                                    <Button variant="primary" className="taviraj-bold" size="lg">Email Me</Button>
                                </a>
                                <a href="https://linkedin.com/in/bryanchang9" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-primary" className="taviraj-bold" size="lg">LinkedIn</Button>
                                </a>
                                <a href="https://github.com/Bryan1203" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline-dark" className="taviraj-bold" size="lg">GitHub</Button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </div>
}
export default Home