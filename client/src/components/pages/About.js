import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

export default function about() {
    return (
        <React.Fragment>
             <Card>
                
             <Badge variant="dark"><h1>About</h1></Badge>

             <Card.Body>
                <p>Welcome to Consiracy Theories.com, 
                Please share your Consiracy Theories</p>
            <p>Stay Tuned...</p>
            </Card.Body>

            <Image rounded  src="https://66.media.tumblr.com/7bac3d74c65b27e2edbeb2cd1a2a7808/tumblr_miq8rtV73D1qh7gfao1_500.gifv" fluid />
            </Card>
        </React.Fragment>
    )
}
