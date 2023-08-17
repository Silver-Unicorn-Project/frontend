import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "./StateSchema";
import {counterReducer} from "entities/CounterAsOfExample";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
      reducer:{
          counter: counterReducer
      },
      devTools: true, //should be global boolean switcher for Dev and Prod
      preloadedState: initialState
    })
}
