import React from 'react';
import { Card } from 'react-bootstrap';

function Topics() {
    return (
        <div>
              <Card style={{backgroundImage: "linear-gradient(to right top, #000689, #0050c0, #0080cb, #00abb9, #00d2a2, #00d8a7, #00dfad, #00e5b2, #00cce1, #00abff, #007eff, #5800ff)", width: '20rem' }}><Card.Body>Topics you need to concentrate</Card.Body></Card>
              <Card style={{backgroundImage: "linear-gradient(to right top, #090708, #452227, #7f3e2d, #a76b1e, #b0a500, #8ebe40, #62d377, #00e5b2, #00cce1, #00abff, #007eff, #5800ff)", width: '20rem' }}><Card.Body>Topics you need to concentrate</Card.Body></Card> 
              <Card style={{backgroundImage: "linear-gradient(to right top, #16020d, #310e29, #4a154b, #5b2377, #5e37a9, #7947bb, #9458cd, #ae69df, #d880d2, #ef9fcd, #f9c2d4, #f8e6e8)", width: '20rem' }}><Card.Body>Topics you need to concentrate</Card.Body></Card>  
        </div>
    )
}

export default Topics
