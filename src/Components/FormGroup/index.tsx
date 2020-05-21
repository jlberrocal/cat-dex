import React, {FunctionComponent} from 'react';
import Form from 'react-bootstrap/Form';
import {ValidationOptions} from 'react-hook-form/dist/types';
import InputGroup from 'react-bootstrap/InputGroup';

export interface FormGroupProps {
    name: string;
    label: string;
    type?: string;
    placeHolder?: string;
    register: any;
    validators?: ValidationOptions;
    errors: any;
    prefix?: string;
    suffix?: string;
}

const FormGroup: FunctionComponent<FormGroupProps> = (props) => {
    const control = <Form.Control
        type={props.type || 'text'}
        name={props.name}
        ref={props.register(props.validators)}
        isInvalid={props.errors.hasOwnProperty(props.name)}
        isValid={!props.errors.hasOwnProperty(props.name)}
        placeholder={props.placeHolder}/>;

    return (
        <Form.Group controlId={props.name}>
            <Form.Label>{props.label}</Form.Label>
            {
                props.prefix || props.suffix
                    ? <InputGroup>
                        {
                            props.prefix && <InputGroup.Prepend>
                                <InputGroup.Text>
                                    {props.prefix}
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                        }
                        {control}
                        {
                            props.suffix && <InputGroup.Append>
                                <InputGroup.Text>
                                    {props.suffix}
                                </InputGroup.Text>
                            </InputGroup.Append>
                        }
                    </InputGroup>
                    : control
            }
            {
                props.errors[props.name] && <Form.Control.Feedback type="invalid">
                    {props.errors[props.name].message}
                </Form.Control.Feedback>
            }
        </Form.Group>
    );
}

export default FormGroup;
