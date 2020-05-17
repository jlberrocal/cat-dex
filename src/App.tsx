import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import HomePage from './pages/HomePage';
import CreateCat from './pages/CreateCat';
import CatDetails from './pages/CatDetails';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/cats/new" component={CreateCat}/>

                <Route exact path="/cats/:catId" component={CatDetails} />

                <Route exact path="/" component={HomePage}/>

                <Route path="*">
                    404 page
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
