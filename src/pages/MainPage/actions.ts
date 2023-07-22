import {AppDispatch} from "shared/lib/GeneralTypes/ReduxTypes";
import {GET_PRODUCT_DATA_REQUEST, REQUEST_FAILED, REQUEST_SUCCESS} from "shared/store";
import {_QUERY, IItem} from "shared/api/apiTypes";
import {errorHandling} from "shared/api/apiUtil";

interface IItemRequestAction {
  type: typeof GET_PRODUCT_DATA_REQUEST
}

interface IItemsRequestSuccessAction {
  type: typeof REQUEST_SUCCESS,
  items: IItem[]

}

interface IItemsRequestFailedAction {

  type: typeof REQUEST_FAILED,


}

export type TItemActions =
  IItemRequestAction|
  IItemsRequestSuccessAction|
  IItemsRequestFailedAction

export  const getProductsData = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_PRODUCT_DATA_REQUEST,
      text: 'my fetch'
    });
    fetch(`${_QUERY}article/`)
      .then(errorHandling)
      .then(item => {

        dispatch({
          type: REQUEST_SUCCESS,
          items: item

        })
      })
      .catch(e => {

        dispatch({
          type: REQUEST_FAILED,
          productsRequestFailed: e

        })
      })
  }
}
export default getProductsData
