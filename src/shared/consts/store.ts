import {combineReducers} from "redux";
import todosReducer from "pages/MainPage/reducers";
import authSlice from "widgets/ModalAutorization/auth-model/AuthSlice";
import {ThunkDispatch} from "redux-thunk";


export const GET_PRODUCT_DATA_REQUEST  = 'GET_PRODUCT_DATA_REQUEST' as const;
export const REQUEST_SUCCESS  = 'REQUEST_SUCCESS' as const;

export const REQUEST_FAILED  = 'REQUEST_FAILED' as const;

export const AUTH_REQUEST_STARTED = 'AUTH_REQUEST_STARTED' as const;
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS' as const;
export const AUTH_REQUEST_FAILED = 'AUTH_REQUEST_FAILED' as const;










export const rootReducer = combineReducers({
  todos: todosReducer,
  auth: authSlice,
  // Add other feature reducers here if you have more features
});

export type RootState = ReturnType<typeof rootReducer>;