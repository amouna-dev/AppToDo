import React, {useState} from 'react';
import { Container, Button, FormControl } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addTask } from '../JS/Actions/action';

const AddTask = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        e.preventDefault();
        if(text.trim()) {
            dispatch(
                addTask({
                    id : Math.random(),
                    text : text,
                    isDone : false
            }));
            setText("");
        }else{
            alert("Cant add an empty task, Please enter text !!!");
        }
    }
    return (
      <Container>
            <div className="addRow">
              
                
              <FormControl
                placeholder= "Enter new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: "50%",borderTopRightRadius: 0, borderBottomRightRadius: 0, marginRight: 0}}
              />
              
                <Button 
                variant="success" 
                disabled={!text}
                onClick={handleChange}  
                style={{ marginLeft: 0, borderBottomLeftRadius: 0, borderTopLeftRadius: 0}}
                >
                  + Add
                </Button>
              
              
        </div>
      </Container>
        
    );
};

export default AddTask;