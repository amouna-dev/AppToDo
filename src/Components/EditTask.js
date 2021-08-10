import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, FormControl } from 'react-bootstrap';
import { editTask } from '../JS/Actions/action';

const EditTask = ({ task }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [newText, setNewText] = useState(task.text);
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTask({id:task.id, text: newText}))
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>Edit Task </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <FormControl
                placeholder="Edit task "
                className="mr-2"
                onChange= {(e) => setNewText(e.target.value)}
                value= {newText} 
            />
           
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {
              handleClose();
              setNewText(task.text)
            }}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {
              handleClose();
              handleEdit(); 
            }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
    
};

export default EditTask;