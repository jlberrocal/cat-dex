import React, {useState} from 'react';
import CatListItem from '../../Components/CatListItem';
import './style.css';
import {Cat} from '../../models/cat';
import {connect} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {bindActionCreators} from 'redux';
import * as actions from '../../state/actions';

export interface CatListProps {
    cats: Cat[];
    actions: any;
}

function CatList({cats, actions}: CatListProps) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [catoToDelete, setCatToDelete] = useState<Cat>(null as any);

    const handleOpenModal = (cat: Cat) => {
        setCatToDelete(cat);
        setModalOpen(true);
    }

    const handleClose = (shouldDelete: boolean) => {
        if (shouldDelete) {
            actions.removeCat(catoToDelete.id);
        }

        setModalOpen(false);
    }

    let elements: JSX.Element[] = cats.map((cat, index) => <CatListItem key={index} openModal={handleOpenModal}
                                                                        cat={cat}/>);

    return (<div className="cards">
        {elements.length > 0
            ? elements
            : <p>You don't have any registered cats yet</p>}
        {
            catoToDelete &&
            <Modal animation={false} show={isModalOpen} onHide={() => handleClose(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting cat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you really want to say farewell to {catoToDelete.name} ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose(false)}>
                        No
                    </Button>
                    <Button variant="danger" onClick={() => handleClose(true)}>
                        Yes ;-(
                    </Button>
                </Modal.Footer>
            </Modal>
        }
    </div>);
}

function mapStateToProps(state: []) {
    return {
        cats: state
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

const catList = connect(mapStateToProps, mapDispatchToProps)(CatList)

export default catList;
