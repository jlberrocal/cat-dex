import React, {FunctionComponent} from 'react';
import Form from 'react-bootstrap/Form';

export interface FormGroupProps {
    name: string;
    label: string;
    placeHolder?: string;
    register: any;
    validators?: {
        isRequired: boolean,
        message: string
    };
    errors: any;
}

const FormGroup: FunctionComponent<FormGroupProps> = (props) => {
    return (
        <Form.Group controlId={props.name}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type="text"
                          name={props.name}
                          ref={props.register(props.validators && {
                              required: props.validators.isRequired && props.validators.message
                          })}
                          isInvalid={props.errors[props.name]}
                          isValid={!props.errors.hasOwnProperty(props.name)}
                          placeholder={props.placeHolder}/>
            {
                props.errors[props.name] && <Form.Control.Feedback type="invalid">
                    {props.errors[props.name].message}
                </Form.Control.Feedback>
            }
        </Form.Group>
    );
}

export default FormGroup;
