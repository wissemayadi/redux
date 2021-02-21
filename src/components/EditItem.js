import React from "react";
import {Modal,Button} from "react-bootstrap";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {editTask} from "../Js/Action/ActionTask";
function EditItem({item}) {
    const [show, setShow] = useState(false);
   const [editInput,setEditInput]=useState(item.text);
   const dispatch=useDispatch();
   
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const edit=()=>{

    dispatch(editTask(item.id,editInput));
  }


    return (
      <>
        <Button variant="primary" onClick={handleShow}>
       edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <input type="text"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{handleClose();
            
            edit()}}

              >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

  export default EditItem;