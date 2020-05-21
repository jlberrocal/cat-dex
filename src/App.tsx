import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage';
import CreateCat from './pages/CreateCat';
import CatDetails from './pages/CatDetails';
import EditCat from './pages/EditCat';
import Navbar from 'react-bootstrap/Navbar';
import BackButton from './Components/BackButton';

function App() {

    return (
        <BrowserRouter>
            <Navbar bg="primary">
                <Navbar.Brand>
                    <BackButton/>
                    <span className="light">
                        Cat Dex
                    </span>
                </Navbar.Brand>
            </Navbar>
            <Switch>
                <Route exact path="/cats/new" component={CreateCat}/>

                <Route exact path="/cats/:catId" component={CatDetails}/>

                <Route exact path="/cats/:catId/edit" component={EditCat}/>

                <Route exact path="/" component={HomePage}/>

                <Route path="*">
                    404 page
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
