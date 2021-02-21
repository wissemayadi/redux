import { ADD_TASK ,DELETE_TASK,EDIT_TASK,DONE_TASK,TOGGLE} from "../constants/ActionTypes"

const initialState={

    list:[],
  show:false 
}

const reducerTask =(state=initialState,action) =>{
switch(action.type){

    case ADD_TASK:
    return {...state,list:[...state.list,action.payload]};
case DELETE_TASK:
return {...state,list:state.list.filter(el=>el.id!==action.payload)

}
case EDIT_TASK:
    return {...state,list:state.list.map(el=>el.id===action.id?{...el,text:action.text}:el)}
case DONE_TASK :
    return {...state,
    list:state.list.map((el)=>
    el.id===action.id ? {...el,isDone:!el.isDone}:el

    )
    
    }

    case TOGGLE: 
    return {...state,show:!state.show}
default :
return  state;
}

}
export default reducerTask;