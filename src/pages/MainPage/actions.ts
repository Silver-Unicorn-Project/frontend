import {AppDispatch} from "shared/lib/GeneralTypes/ReduxTypes";
import {GET_PRODUCT_DATA_REQUEST, REQUEST_FAILED, REQUEST_SUCCESS} from "shared/store";
import {_QUERY} from "shared/api/apiTypes";
import {errorHandling} from "shared/api/apiUtil";

const getProductsData = () => {
  return function (dispatch:AppDispatch) {
    dispatch({
      type: GET_PRODUCT_DATA_REQUEST,
      text: 'my fetch'
    });
    fetch(`${_QUERY}ingredients/`)
      .then(errorHandling)
      .then(item => {
        dispatch({
          type: REQUEST_SUCCESS,
          orders: item.data

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
export  default getProductsData
