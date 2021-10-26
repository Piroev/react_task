import React from "react";
import {Navbar, Container} from "react-bootstrap";


const Header = () => {
    return (
        <Navbar  expand="lg" bg="primary" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand>BUBUSECHKA 11.0.3</Navbar.Brand>
           </Container>
        </Navbar>
    )
}

export default Header;