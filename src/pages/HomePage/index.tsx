import React from 'react';
import CatList from '../../Containers/CatList/CatList';
import FloatingButton from '../../Components/AddNewButton';

export default function Home() {


    return (
        <div className="App">
            <h1 className="AppTitle">List of cats</h1>
            <CatList/>

            <FloatingButton/>
        </div>
    );
}
