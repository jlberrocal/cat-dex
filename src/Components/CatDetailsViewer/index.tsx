import React, {CSSProperties} from 'react';
import Card from 'react-bootstrap/Card';
import {Cat} from '../../models/cat';
import {Link} from 'react-router-dom';

interface CatDetailsViewerProps {
    cat: Cat
}

const styles: { [key: string]: CSSProperties } = {
    card: {
        display: 'flex',
        width: '600px'
    },
    img: {
        maxWidth: '400px'
    },
    summary: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    edit: {
        position: 'absolute',
        top: '15px',
        right: '15px'
    }
}

export default function CatDetailsViewer({cat}: CatDetailsViewerProps) {
    return (
        <Card>
            <Card.Body style={styles.card}>
                <Card.Img src={cat.photo} style={styles.img}/>
                <div style={styles.summary}>
                    <Link className="btn btn-outline-primary" style={styles.edit} to={`/cats/${cat.id}/edit`}>
                        <i className="fa fa-pen"/>
                    </Link>
                    <h4>{cat.name}</h4>
                    <h5>{cat.breed}</h5>
                    <h5>Height: {cat.weight} cm</h5>
                    <h5>Weight: {cat.height} lb</h5>
                </div>
            </Card.Body>
            <Card.Footer>
                {cat.description}
            </Card.Footer>
        </Card>
    )
}
