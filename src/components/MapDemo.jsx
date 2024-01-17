import React, { useEffect, useState } from 'react';
import { Badge, Card, CardBody, Carousel, CarouselItem, Col, Collapse, Container, ListGroup, Pagination, Row } from 'react-bootstrap';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import Journal from '../assets/documents/journal';
import Bike from '../assets/_figures/bike.svg'

const MapDemo = () => {
    const [map, setMap] = useState(null)
    useEffect(() => {
        fetch("https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json", {
        })
            .then(res => { return res.json() })
            .then(data => {
                const newData = JSON.parse(JSON.stringify(data));  // Deep copy
                newData.objects.states.geometries = newData.objects.states.geometries.filter(
                    item => !["02", "72", "15", "60", "66", "78", "69"].includes(item.id));
                setMap(newData);
            })
    }, [])   
    const visitedStates = {"36":[650, 150, '5/22/2022-5/23/2022'], "34":[650, 190, '5/24/2022'], "42":[590, 190, '5/25/2022-5/31/2022'],
        "39":[530, 190, '6/01/2022-6/03/2022'], "18":[490, 190, '6/04/2022-6/07/2022'], "17":[450, 170, '6/08/2022-6/13/2022'], 
        "55":[440, 140, '6/14/2022-6/17/2022'], "27":[390, 120, '6/18/2022-6/21/2022'], "46":[300, 110, '6/22/2022-6/29/2022'], 
        "56":[200, 140, '6/31/2022-7/09/2022'], "30":[180, 90, '7/10/2022-7/15/2022'], "16":[110, 120, '7/16/2022-7/18/2022'], 
        "53":[50, 80, '7/19/2022-7/24/2022'], "41":[40, 150, '7/25/2022-7/29/2022'], "06":[20, 260, '7/30/2022-8/06/2022']}
    const [selectedState, setSelectedState] = useState("36")
    const [bikePosition, setBikePosition] = useState({ x: 650, y: 150 })
    const handleStateClick = (id) => {
        if (selectedState === id) {
            setSelectedState("36")
            setBikePosition({ x: 650, y: 150 })
        } else {
            setSelectedState(id)
            setBikePosition({ x: visitedStates[id][0], y: visitedStates[id][1] })
        }
        setPage(1)
    }

    const charsPerPage = 1250;
    function slicer(str, i, charsPerPage) {
        var pages = [];
        let p = 0;
        while (i < str.length) {
            let j = i + charsPerPage;
            if (j < str.length) {
                while (j > i && str[j] !== ' ') {
                    j--;
                }
                if (j === i) {
                    j = i + charsPerPage;
                }
            }
            pages[p++] = str.slice(i, j).trim();
            i = j;
        }
        return pages;
    }    

    const handlePrev = () => {
        setPage(curr => curr - 1);
    };

    const handleNext = () => {
        setPage(curr => curr + 1);
    };

    const [page, setPage] = useState(1)

    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (imgsrc) => {
        setSelectedImage(imgsrc);
    };

    function formatJournalEntry(entry) {
        const pages = slicer(entry.body, 0, charsPerPage);
        return (
            <div>
                <CardBody>
                    <h2 className='journalTitle' style={{textAlign: 'center'}}>"{entry.title}"</h2>
                    <Card style={{height:'571px'}}>
                        <div style={{height:'500px', overflow:'hidden', marginBottom:'10px'}}>
                        <p className='journalBody' style={{ margin: '20px', textAlign: 'left' }}>
                            {pages[page - 1]}
                            {pages[page] !== undefined && <span>...</span>}
                        </p>
                        </div>
                        <div style={{alignSelf:'center'}}>
                            <Pagination className='taviraj-medium'>
                                <Pagination.Prev onClick={handlePrev} disabled={page===1}  linkStyle={{color:'black'}}/>
                                <Pagination.Item linkStyle={{color:'black'}}>{page}</Pagination.Item>
                                <Pagination.Next onClick={handleNext} disabled={pages[page] === undefined} linkStyle={{color:'black'}}/>
                            </Pagination>
                        </div>
                    </Card>
                </CardBody>
                {selectedImage && (
                    <div className="image-modal" onClick={() => setSelectedImage(null)}>
                        <img src={selectedImage} alt="Enlarged view" />
                    </div>
                )}
            </div>
        )
    }    
    
    return (
        <Container>
        {map&&(
        <Row style={{backgroundColor:'#89CFF3', paddingBottom:'15px', paddingTop:'15px', borderRadius:'10px'}}>
            <Col xs={12} md={6}>
            <Row style={{marginBottom:'15px'}}>
                <Card className='text-center' style={{ border:'none', backgroundColor: '#89CFF3'}}>
                <h1 className='stateTitle' style={{marginTop:'10px', fontSize:35}}>
                    {selectedState ? map.objects.states.geometries.find(
                        geo => geo.id === selectedState).properties.name : 'click any visited state'}
                </h1>
                <h2 className='stateTitle'>
                    {selectedState? visitedStates[selectedState][2] : `and read the journal entry!`}
                </h2>
                </Card>
            </Row>
            <hr/>
            <Row style={{marginBottom:'15px'}}>
                <Card style={{overflow:'hidden', backgroundColor: '#89CFF3', border:'none'}}>
                <ComposableMap
                projection='geoMercator'
                projectionConfig={{
                    scale: 750,
                    center: [-96, 39],
                }}
                style={{backgroundColor:'#89CFF3', marginTop:'-50px', marginBottom:'-50px'}}
                fill='white'
                stroke='black'
                strokeWidth={1}
                >
                    <Geographies geography={map}>
                        {(geographies) => {
                        return geographies.geographies.map((geo) => {
                            const isVisited = Object.keys(visitedStates).includes(geo.id)
                            const isSelected = (geo.id === selectedState);

                            return <Geography 
                                key={geo.rsmKey} 
                                geography={geo} 
                                style={{
                                    hover:{outline: 'none', fill: isVisited? '#feb300' : 'white'},
                                    default:{outline: 'none', fill: isSelected ? '#feb300' : (isVisited ? '#ff5e6c' : 'white'), 
                                    pointerEvents: isVisited ? 'all' : 'none'},
                                    pressed: {outline: 'none', fill: '#feb300'},
                                }}
                                onClick={() => handleStateClick(geo.id)}
                                />
                        });
                        }}
                    </Geographies>
                    <image 
                        href={Bike}
                        x={bikePosition.x} 
                        y={bikePosition.y}
                        height="100"
                        width="100"
                    />
                </ComposableMap>
                {selectedState &&
                    <CardBody>
                    <div className="images-container">
                        {Journal[selectedState].image.map((imgsrc, index) => (
                            <div key={index} className="image-item">
                                <Card className='imageCard'>
                                <img
                                    className="d-block"
                                    src={imgsrc}
                                    alt={`image of demo${index+1}`}
                                    style={{ height: '150px', width: 'auto', objectFit: 'contain', borderRadius:'4px'}}
                                    onClick={() => handleImageClick(imgsrc)}
                                />
                                </Card>
                            </div>
                        ))}
                    </div>
                    </CardBody>
                }
                </Card>
            </Row>
            </Col>
            <Col xs={12} md={6}>
                <Card style={{height: '100%', backgroundColor: '#CDF5FD', border:'none'}}>
                    {selectedState && formatJournalEntry(Journal[selectedState])}
                </Card>
            </Col>
        </Row>
        )}
        </Container>
    )
}

export default MapDemo;