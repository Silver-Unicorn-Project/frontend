import {GET_PRODUCT_DATA_REQUEST, REQUEST_FAILED, REQUEST_SUCCESS} from "shared/consts/store";
import {IItem} from "shared/api/apiTypes";

export interface  IItemsState{
  items: IItem[],
  itemsRequest: boolean,
  itemsRequestSuccess: boolean,
  itemsRequestFailed: boolean,
  itemsRequestConfirmed:  boolean,
  requestErrBody:any[],
  itemsDataHaveBeenRecieved: boolean



}


const initialState: IItemsState = {
  items: [],
  itemsRequest: false,
  itemsRequestSuccess:false,
  itemsRequestFailed:false,
  itemsRequestConfirmed: false,
  requestErrBody:[],
  itemsDataHaveBeenRecieved:false
  // other state properties specific to the todos feature
};



// Reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DATA_REQUEST:
      // handle adding a todo to the state
      return {
        ...state,
        itemsRequest: true
      };
    case REQUEST_SUCCESS:
      // handle toggling a todo's completed status

      return {
        ...state,
        itemsDataHaveBeenRecieved: true,
        items: action.items,
        itemsRequest: false
      };
    // handle other action types if needed
    case REQUEST_FAILED:
      // handle toggling a todo's completed status
      return {
        ...state,
        itemsRequestFailed:true,
        requestErrBody:[]

      };
    default:
      return state;
  }
};

export default todosReducer;
