import React, {MouseEvent} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function BackButton() {
    const location = useLocation();
    const history = useHistory();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        history.goBack();
    }

    if (location.pathname !== '/') {
        return (
            <Button type="button" size="sm" onClick={handleClick}>
                <i className="fa fa-arrow-left"/>
            </Button>
        );
    }
    return null;
}
