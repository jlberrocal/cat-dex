import React from 'react';
import Card from 'react-bootstrap/Card';
import {Cat} from '../../models/cat';

interface CatDetailsViewerProps {
    cat: Cat
}

export default function CatDetailsViewer({cat}: CatDetailsViewerProps) {
    return (
        <Card>
            <Card.Img variant="top" src={cat.photo} style={{width: '400px'}}/>
            <Card.Body>
                <Card.Text>
                    {cat.name} is a {cat.gender === 'F' ? 'Female' : 'Male'} {cat.breed} cat of
                    color(s) {cat.colors} and has been described as: <b>{cat.description}</b>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
