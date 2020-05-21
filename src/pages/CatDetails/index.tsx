import React, {CSSProperties, useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Cat} from '../../models/cat';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import CatDetailsViewer from '../../Components/CatDetailsViewer';
import {address} from 'faker';
import CatPosition from '../../Components/CatPosition';

interface CatDetailsProps extends RouteComponentProps {
    cat: Cat
}

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column-reverse',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

function CatDetails({cat, history}: CatDetailsProps) {
    const [active, setActive] = useState('details')
    // Cats will appear in really random positions, let's imagine they are like Entei Suicune and Raikou
    const position: [number, number] = [parseFloat(address.latitude()), parseFloat(address.longitude())];

    return (
        <div style={styles.container}>
            <Tabs transition={false} id="cat-details" activeKey={active} onSelect={(tab: string) => setActive(tab)}
                  className="justify-content-center">
                <Tab title="Details" eventKey="details">
                    <CatDetailsViewer cat={cat}/>
                </Tab>

                <Tab title="Location" eventKey="location">
                    <CatPosition position={position}/>
                </Tab>
            </Tabs>
        </div>
    )
}

function mapStateToProps(state: Cat[], ownProps: RouteComponentProps) {
    const {match: {params}, history} = ownProps;
    const {catId} = params as any;
    const cat = state.find(cat => cat.id === +catId);

    if (!cat) {
        history.goBack();
        return;
    }
    return {
        cat
    };
}

const catDetails = connect(mapStateToProps)(CatDetails)

export default catDetails;
