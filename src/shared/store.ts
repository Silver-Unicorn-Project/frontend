import {combineReducers} from "redux";
import todosReducer from "pages/MainPage/reducers";


export const GET_PRODUCT_DATA_REQUEST  = 'GET_PRODUCT_DATA_REQUEST' as const;
export const REQUEST_SUCCESS  = 'REQUEST_SUCCESS' as const;

export const REQUEST_FAILED  = 'REQUEST_FAILED' as const;

export const rootReducer = combineReducers({
  todos: todosReducer,
  // Add other feature reducers here if you have more features
});

export type RootState = ReturnType<typeof rootReducer>;
