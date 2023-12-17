import { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';

const Blog = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://strava-embeds.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Blog Title</Card.Title>
                    <Card.Text>
                        This is a sample blog post content.
                    </Card.Text>
                    <div
                        className="strava-embed-placeholder"
                        data-embed-type="activity"
                        data-embed-id="7588740005"
                        data-style="dark"
                        data-width="10%" // Adjust width as needed
                        style={{ maxWidth: '100px', margin: '0 auto' }} // Additional styling for responsiveness
                    ></div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Blog;
