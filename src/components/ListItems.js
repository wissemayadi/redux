import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
import { deleteTask, doneTask } from "../Js/Action/ActionTask";
import EditItem from "./EditItem";


const ListItems = () => {
    const list = useSelector((state) => state.reducerTask.list);
    const show = useSelector(state => state.reducerTask.show)
    const dispatch = useDispatch();
  
    return (
      <ListGroup>
        {(show ? list.filter((el)=> el.isDone === true ):list).map((item,i)=> (
          <ListGroup.Item
            key={i}
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(doneTask(item.id))}
              >
               {item.isDone?"unDone": "isDone"}
              </Button>
              {/* <Button variant="outline-primary">Edit</Button> */}
              <EditItem item={item}/>
              <Button
                variant="danger"
                onClick={() => dispatch(deleteTask(item.id))}
              >
                Delete
              </Button>
            </div>
  
            <p style={{ margin: "0px", }} className={item.isDone?"decoration":""}>{item.text}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };
  
  export default ListItems;