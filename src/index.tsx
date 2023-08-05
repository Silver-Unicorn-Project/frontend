import React from 'react';
import { App } from "app/App";
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "shared/consts/store";
import {Provider} from "react-redux";
import {StoreProvider} from "app/providers/StoreProvider";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const enhancer = composeEnhancers(applyMiddleware(thunk));
//
// const store = createStore(rootReducer, enhancer);
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof rootReducer>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
const container = document.getElementById('root')

if (!container) {
  throw new Error('Container root not found')
}

const root = createRoot(container)
root.render(
  <StoreProvider>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </StoreProvider>
)
