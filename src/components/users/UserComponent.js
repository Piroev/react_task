import React from 'react';
import { Card } from 'react-bootstrap';
import avatar from "./img/No_avatar.png";
import { useSelector } from 'react-redux';
import UsersCardsBtns from './UsersCardsBtns';

const UserComponent = (users) => {

    const user = users.user;
    const {id, first_name, last_name, email, city} = user;
        return(
            
            <Card border="dark" style={{ width: "40rem"}}>
                <Card.Img variant="top" src={avatar} style={{width: "60px"}} key={id}/>
                <Card.Header key={first_name} className="mt-10">Name:  {first_name +" " + last_name}</Card.Header>
                <Card.Body>
                    <Card.Text key={email}>Email: {email}</Card.Text>
                    <Card.Text key={city}>City: {city}</Card.Text>
                </Card.Body>
                <UsersCardsBtns users={user}/>
            </Card>
            
        
        )
    
};

export default UserComponent;