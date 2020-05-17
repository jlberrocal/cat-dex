import React, {CSSProperties, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import * as actions from '../../state/actions';
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useForm} from 'react-hook-form';
import FormGroup from '../../Components/FormGroup';
import {Cat} from '../../models/cat';
import {RouteComponentProps} from 'react-router';
import Col from 'react-bootstrap/Col';
import DropZone from '../../Components/DropZone';

interface CreateCatProps extends RouteComponentProps {
    actions: any;
}

function CreateCat({actions, history}: CreateCatProps) {
    const {register, unregister, handleSubmit, errors, setValue} = useForm<Cat>();

    useEffect(() => {
        register('photo', {
            required: true
        });
        return () => unregister('photo');
    }, [register, unregister]);

    const onSubmit = (data: any) => {
        if (Object.keys(errors).length === 0) {
            actions.addCat(data);
            history.push('/');
        }
    };

    const containerStyle: CSSProperties = {
        height: '100vh',
        width: '100%'
    }

    const formStyle: CSSProperties = {
        width: '100%'
    };

    const dropZoneValueChanged = (key: string, value: string) => {
        setValue(key, value);
    }

    return (
        <div className="container d-flex align-items-center justify-content-center" style={containerStyle}>
            <form noValidate onSubmit={handleSubmit(onSubmit)} style={formStyle}>
                <Form.Row>
                    <Col>
                        <FormGroup name="name"
                                   label="Name"
                                   register={register}
                                   errors={errors}
                                   placeHolder="Cat Name"
                                   validators={{isRequired: true, message: 'Name cant be empty'}}/>
                    </Col>
                    <Col>
                        <FormGroup name="breed"
                                   label="Breed"
                                   register={register}
                                   errors={errors}
                                   placeHolder="Breed"
                                   validators={{isRequired: true, message: 'Breed cant be empty'}}/>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col>
                        <FormGroup name="description"
                                   label="Description"
                                   register={register}
                                   errors={errors}
                                   placeHolder="Description"
                                   validators={{isRequired: true, message: 'Description cant be empty'}}/>
                    </Col>
                    <Col>
                        <FormGroup name="colors"
                                   label="Color(s)"
                                   register={register}
                                   errors={errors}
                                   placeHolder="Color(s)"
                                   validators={{isRequired: true, message: 'Color(s) cant be empty'}}/>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="gender">
                            <Form.Label>Gender</Form.Label>
                            <Form.Check type="radio"
                                        name="gender"
                                        ref={register({
                                            required: 'You must choose a gender'
                                        })}
                                        id="male"
                                        isInvalid={errors.hasOwnProperty('gender')}
                                        isValid={!errors.hasOwnProperty('gender')}
                                        value="M"
                                        label="Male"/>
                            <Form.Check type="radio"
                                        name="gender"
                                        ref={register({
                                            required: 'You must choose a gender'
                                        })}
                                        id="female"
                                        isInvalid={errors.hasOwnProperty('gender')}
                                        isValid={!errors.hasOwnProperty('gender')}
                                        value="F"
                                        label="Female"/>

                            <Form.Control.Feedback type="invalid">
                                {errors?.gender?.message}
                            </Form.Control.Feedback>

                        </Form.Group>
                    </Col>
                    <Col>
                        <DropZone handleValueChange={dropZoneValueChanged}/>
                    </Col>
                </Form.Row>
                <Form.Row className="d-flex justify-content-end" style={{ marginTop: '15px' }}>
                    <Form.Group>
                        {Object.keys(errors).length === 0
                            ? <Button type="submit">Save</Button>
                            : <Button disabled type="submit">Save</Button>
                        }
                    </Form.Group>
                </Form.Row>
            </form>
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
