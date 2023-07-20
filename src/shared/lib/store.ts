import {combineReducers} from "redux";
import todosReducer from "widgets/CardItem/reducers";

const rootReducer = combineReducers({
  todos: todosReducer,
  // Add other feature reducers here if you have more features
});

export default  rootReducer
