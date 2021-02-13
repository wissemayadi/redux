import {combineReducers} from "redux";
import reducerTask from "./ReducerTask";



const rootReducer=combineReducers({reducerTask:reducerTask});

export default rootReducer;