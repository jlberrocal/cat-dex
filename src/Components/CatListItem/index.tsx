import React, {CSSProperties} from 'react';
import Card from 'react-bootstrap/Card';
import {Cat} from '../../models/cat';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export interface CatListItemProps {
    cat: Cat;
    openModal: (cat: Cat) => void
}

function CatListItem({cat, openModal}: CatListItemProps) {
    const style: CSSProperties = {
        width: '13rem',
        backgroundColor: '#F0F0C9',
        margin: '0 15px 15px'
    };

    return (
        <Card style={style}>
            <Card.Img variant="top" src={cat.photo}/>
            <Card.Header>
                <Card.Title>{cat.name}</Card.Title>
            </Card.Header>
            <Card.Footer className="d-flex justify-content-between">
                <Link className="btn btn-primary" to={`/cats/${cat.id}`}>Details</Link>
                <Button type="button" className="btn btn-danger" onClick={() => openModal(cat)}>
                    <i className="fa fa-trash"/>
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default CatListItem;
