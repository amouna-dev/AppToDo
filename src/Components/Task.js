import React, {useState} from 'react';
import '../App.css';
import { Button } from 'react-bootstrap'
import EditTask from './EditTask';
import { useDispatch } from 'react-redux';
import { deleteTask, completeTask } from '../JS/Actions/action';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';


const Task = ({task}) => {
    const [done, setDone] =  useState(false)
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }
    const handleChange = () => {
        
        dispatch(completeTask({id:task.id, text: task.text, isDone: task.isDone}));
        setDone(task.isDone = !done);
    }
    return (
        <Container>
        <Row>
          <Col md={12}>
            <ListGroup.Item>
              <Row className="listToDo">
                <Col md={{ md: 7, offset: 1 }} className="listItemColToDo">

     <input type="checkbox" onClick={handleChange} />       
     <span style={{fontSize: "18px", fontWeight:600, fontStyle: "italic", color:"#271c6c", padding: 10}} className={task.isDone ? 'checked' : '' }>       
    
    {task.text} </span>
   
            </Col>
            <Col md={4} className="listItemColDelete">
            <Button 
            variant="danger"
            onClick={handleDelete}
            > Delete  </Button>

            <EditTask task={task} />
          
            </Col>
              </Row>
            </ListGroup.Item>
          </Col>
        </Row>
      </Container>
    );
};

export default Task;