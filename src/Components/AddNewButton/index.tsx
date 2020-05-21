import React, {CSSProperties} from 'react';
import Button from 'react-bootstrap/Button';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';

function floatingButton({history}: RouteComponentProps) {
    const handleClick = () => history.push('/cats/new');
    const style: CSSProperties = {
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '40px',
        right: '40px',
        borderRadius: '50px',
        textAlign: 'center'
    };
    
    return (
        <Button className="btn btn-info" style={style} type="button" onClick={handleClick}>
            <i className="fa fa-2x fa-plus"/>
        </Button>
    );
}

const FloatingButton = withRouter(floatingButton);

export default FloatingButton;
