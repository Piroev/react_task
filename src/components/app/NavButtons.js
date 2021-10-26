
import React from 'react';
import { useState } from 'react';
import { ButtonGroup, Button, Container } from 'react-bootstrap';

const NavButtons = (props) => {
  const [isHidden, setIsHidden] = useState(false);
  
  const dashHandler = () => {
    setIsHidden((s) => !s);
    props.clickedBtn();
  }
  return (
    <>  
      <ButtonGroup vertical>
          <Button variant="primary" onClick={dashHandler}>{ !isHidden ? "Show users list" : "Hide"}</Button>
          <Button variant="primary">Show product list</Button>
      </ButtonGroup>
    </>
  );
};


export default NavButtons;