import React from 'react';
import NavButtons from './NavButtons';
import { Container } from "react-bootstrap";
import UsersList from '../users/UsersList';

function AppContainer() {
    return (
        <Container>
            <NavButtons />
            <UsersList />
        </Container>
            
        
    );
}

export default AppContainer;