import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Cat} from '../../models/cat';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import CatDetailsViewer from '../../Components/CatDetailsViewer';
import {address} from 'faker';
import CatPosition from '../../Components/CatPosition';

interface CatDetailsProps {
    cat: Cat
}

function CatDetails({cat}: CatDetailsProps) {
    const [active, setActive] = useState('details')
    // Cats will appear in really random positions, let's imagine they are like Entei Suicune and Raikou
    const position: [number, number] = [parseFloat(address.latitude()), parseFloat(address.longitude())];

    return (
        // ToDo https://i.ytimg.com/vi/MpsS2F8HIYs/maxresdefault.jpg
        <Tabs transition={false} id="cat-details" activeKey={active} onSelect={(tab: string) => setActive(tab)}>
            <Tab title="Details" eventKey="details">
                <CatDetailsViewer cat={cat}/>
            </Tab>

            <Tab title="Location" eventKey="location">
                <CatPosition position={position}/>
            </Tab>
        </Tabs>
    )
}

function mapStateToProps(state: Cat[], ownProps: RouteComponentProps) {
    const {match: {params}} = ownProps;
    const {catId} = params as any;
    return {
        cat: state.find(cat => cat.id === +catId) || {} as Cat
    };
}

const catDetails = connect(mapStateToProps)(CatDetails)

export default catDetails;
