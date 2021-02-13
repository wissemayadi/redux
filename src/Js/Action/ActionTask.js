import { ADD_TASK,DELETE_TASK, DONE_TASK,EDIT_TASK, TOGGLE } from "../constants/ActionTypes"

export const addTask =(payload)=>{

    return {
        type: ADD_TASK,
        payload 
    }
}
export const deleteTask =(payload)=>{

    return {
        type: DELETE_TASK,
       payload,
    }
}
export const doneTask =(payload)=>{

    return {
        type: DONE_TASK,
        payload 
    }
}
export const editTask =(id,text)=>{

    return {
        type: EDIT_TASK,
        id,text
    }
}
export const toggle=()=>{
    return {
      type:TOGGLE
    }
  }

