import {RootState} from "index";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionCreator} from "redux";

export type AppDispatch<TReturnType = void> = ThunkDispatch<RootState, never, TAppActions>;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<Promise<TReturn>, RootState, never, TAppActions>
>;
