import React, {useEffect} from 'react';
import {Cat} from '../../models/cat';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormGroup from '../FormGroup';
import DropZone from '../DropZone';
import Button from 'react-bootstrap/Button';
import {useForm} from 'react-hook-form';

interface CatFormProps {
    cat?: Cat;
    onSubmit: (data: Cat) => void;
}

export default function CatForm({cat, onSubmit}: CatFormProps) {
    const {register, unregister, handleSubmit, errors, setValue, watch} = useForm<Cat>();

    useEffect(() => {
        register('photo', {
            required: true
        });
        return () => unregister('photo');
    }, [register, unregister]);

    useEffect(() => {
        if (cat) {
            Object.keys(cat).forEach((key: string) => {
                setValue(key, (cat as any)[key], true);
            });
        }
    }, [cat, setValue])

    const dropZoneValueChanged = (key: string, value: string) => {
        setValue(key, value);
    }

    const photo = watch('photo');

    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
            <Form.Row>
                <Col>
                    <FormGroup
                        name="name"
                        label="Name"
                        register={register}
                        errors={errors}
                        placeHolder="Cat Name"
                        validators={{required: 'Name cant be empty'}}/>
                </Col>
                <Col>
                    <FormGroup
                        name="breed"
                        label="Breed"
                        register={register}
                        errors={errors}
                        placeHolder="Breed"
                        validators={{required: 'Breed cant be empty'}}/>
                </Col>
            </Form.Row>

            <Form.Row>
                <Col>
                    <FormGroup
                        name="height"
                        label="Height"
                        suffix="cm"
                        type="number"
                        register={register}
                        errors={errors}
                        placeHolder="Cat Height"
                        validators={{
                            required: 'Height cant be empty',
                            min: {
                                value: 1,
                                message: 'Height should be at least 1'
                            }
                        }}/>
                </Col>
                <Col>
                    <FormGroup
                        name="weight"
                        label="Weight"
                        suffix="lb"
                        type="number"
                        register={register}
                        errors={errors}
                        placeHolder="Cat Weight"
                        validators={{
                            required: 'Weight cant be empty',
                            min: {
                                value: 1,
                                message: 'Weight should be at least 1'
                            }
                        }}/>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            as="textarea"
                            name="description"
                            ref={register({
                                required: 'You need to provide a description'
                            })}
                            isInvalid={errors.hasOwnProperty('description')}
                            isValid={!errors.hasOwnProperty('description')}
                            placeholder="Your cat description"/>
                        {
                            errors.description && <Form.Control.Feedback type="invalid">
                                {errors.description.message}
                            </Form.Control.Feedback>
                        }
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Group controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Check
                            type="radio"
                            name="gender"
                            ref={register({
                                required: 'You must choose a gender'
                            })}
                            id="male"
                            isInvalid={errors.hasOwnProperty('gender')}
                            isValid={!errors.hasOwnProperty('gender')}
                            value="M"
                            label="Male"/>
                        <Form.Check
                            type="radio"
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
                            {errors.gender !== undefined ? errors.gender?.message : ''}
                        </Form.Control.Feedback>

                    </Form.Group>
                </Col>
                <Col>
                    <DropZone handleValueChange={dropZoneValueChanged}/>
                </Col>
            </Form.Row>
            <Form.Row className="d-flex justify-content-end" style={{marginTop: '15px'}}>
                <Form.Group>
                    {Object.keys(errors).length === 0
                        ? <Button type="submit">Save</Button>
                        : <Button disabled type="submit">Save</Button>
                    }
                </Form.Group>
            </Form.Row>

            {photo && <Form.Row className="justify-content-center">
                <img width="400" src={photo} alt="Preview"/>
            </Form.Row>

            }
        </form>
    )
}
