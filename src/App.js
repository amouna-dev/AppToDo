import React from 'react';
import './App.css';
import { Container, Col, Row } from 'react-bootstrap'; 
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

function App() {

  return (
    <div className="App">
      <Col md={{ span: 6, offset: 3 }}>
       <Container className="mainContainer">
        <Row className="headerRow">
          <Col md={{ span: 8, offset: 2 }}>
        <h1 className="title"> ToDo App</h1>
          </Col>
        </Row>
        <Row>
        <AddTask />
         </Row>
        <ListTask />
       
     </Container>
     </Col>
    </div>
  );
}

export default App;
