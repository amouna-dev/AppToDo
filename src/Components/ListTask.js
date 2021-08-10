import React, { useState } from 'react';
import { useSelector } from 'react-redux';
//import Task from './Task';
import "../App.css";
import FilterTask from './FilterTask';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

const ListTask = () => {

    const listTask = useSelector((state) => state.task.listTasks);
    
    const [filter, setFilter] = useState("ALL");
    const handlefilter= (type) => {
        switch (type) {
            case "Done":
                return listTask.filter(task => task.isDone === true);
            case "unDone":
                return listTask.filter(task => task.isDone === false);
            default:
                return listTask;
        }
    }
    return (
        <Container>
        <Row className="filterRow">
          <Col md={4}>
            <button className="btns" onClick={()  => 
             setFilter("ALL")
                }>All</button>
             </Col>
             <Col md={4}>
            <button className="btns" onClick={()  => 
             setFilter("Done") 
                }>Done</button>
            </Col>
            <Col md={4}>
            <button className="btns" onClick={()  => 
             setFilter("unDone") 
                }>UnDone</button>
            </Col>
            </Row>
           
            <Row>
                <ListGroup>
            
                    {/* {
                    listTask
                    .map((el) => <Task task={el} key={el.id} />)
                    } */}
                    <FilterTask tasks={handlefilter(filter)} /> 

                </ListGroup>
            </Row>
        </Container>
    );
};

export default ListTask;