import React from 'react';
import {Cat} from '../../models/cat';
import CatForm from '../../Components/CatForm';
import {RouteComponentProps} from 'react-router';
import {bindActionCreators} from 'redux';
import * as actions from '../../state/actions';
import {connect} from 'react-redux';

interface EditCatProps extends RouteComponentProps {
    actions: any;
    cat: Cat;
}

function EditCat({cat, actions, history}: EditCatProps) {
    const onSubmit = (data: Cat) => {
        actions.addCat(data);
        history.push('/');
    };

    return (
        <div className="container d-flex align-items-center justify-content-center">
            <CatForm onSubmit={onSubmit} cat={cat}/>
        </div>
    );
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

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

const editCat = connect(mapStateToProps, mapDispatchToProps)(EditCat)

export default editCat;
