import React, { useState }from 'react';
import { connect } from 'react-redux';
import { Form, FormControl, FormGroup, FormLabel, Button } from "react-bootstrap";
import { onChangeAC } from '../../redux/actions/userActions';



const EditUser = (props) => {

    console.log(props)
    

    const {id, first_name, last_name, email, gender, city, country} = props.user.user;

    const [close, setClose] = useState(true);
    
    const handlerClosePopup = () => {
        setClose((c) => !c);
        props.handlePopupCloseEdit();
    }

    const updateUserData = () => {
        
    }

    const onInputChange = () => {
        console.log(first_name);
    }
    
        return (
            <div className="container-user-info">
                <div className="info-header">
                    Edit User
                </div>
                <Form>
                    <FormGroup className="mb-3" controlId = "id">
                        <FormLabel>Name</FormLabel>
                        <FormControl type="text" name="first_name" value={first_name} onChange={onInputChange} required/>
                    </FormGroup>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required/>
                    </Form.Group>
                    <FormGroup className="mb-3" controlId = "id">
                        <FormLabel>Gender</FormLabel>
                        <FormControl type="text" required/>
                    </FormGroup>
                    <Form.Group className="mb-3">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="primary" type="button">
                    Dismiss
                </Button>
                </Form>
            </div>
        );
    }

    const mapStateToProps = (state) => {
        return {
            
            ...state

        }

    }

    const mapDispatchToProps = (dispatch) => {
        return {
            onChangeInputs: () => dispatch(onChangeAC())
        }
    }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditUser);