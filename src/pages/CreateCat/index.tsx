import React from 'react';
import {bindActionCreators} from 'redux';
import * as actions from '../../state/actions';
import {connect} from 'react-redux';
import {Cat} from '../../models/cat';
import {RouteComponentProps} from 'react-router';
import CatForm from '../../Components/CatForm';

interface CreateCatProps extends RouteComponentProps {
    actions: any;
}

const styles = {
    container: {
        height: '100vh',
        width: '100%'
    }
}

function CreateCat({actions, history}: CreateCatProps) {

    const onSubmit = (data: Cat) => {
        actions.addCat(data);
        history.push('/');
    };

    return (
        <div className="container d-flex align-items-center justify-content-center" style={styles.container}>
            <CatForm onSubmit={onSubmit}/>
        </div>
    );
}

function mapStateToProps(state: any) {
    return {
        cats: state
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

const createCat = connect(mapStateToProps, mapDispatchToProps)(CreateCat);

export default createCat;
