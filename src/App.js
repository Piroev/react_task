import React, { useState } from 'react';
import './App.css';
import NavButtons from './components/app/NavButtons';
import Header from './components/app/Header';
import { Col, Container, Row } from "react-bootstrap";
import UsersList from './components/users/UsersList';

function App() {
  
  const [usersListState, setUserslistState] = useState(false);

  const clickedBtn = () => {
    setUserslistState(!usersListState);
  }
 return (
      <Container fluid>
        <Row>
          <Header fixed="top"/>
        </Row>
        <Row>
          <Col sm={3}>
            <NavButtons
              props={usersListState}
              clickedBtn={clickedBtn}
            />
          </Col>
          <Col sm={8}>
            {usersListState && <UsersList />} 
          </Col>
        </Row>
      </Container>

  );
}

export default App;
