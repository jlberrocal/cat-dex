import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function BackButton() {
    const location = useLocation();

    if (location.pathname !== '/') {
        return (
            <Link className="btn btn-sm light" to="/">
                <i className="fa fa-arrow-left"/>
            </Link>
        );
    }
    return null;
}
