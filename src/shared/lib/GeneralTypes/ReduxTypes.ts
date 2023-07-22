import {RootState} from "index";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionCreator} from "redux";
import {TItemActions} from "pages/MainPage/actions";

export type AppDispatch<TReturnType = void> = ThunkDispatch<RootState, never, TItemActions>;
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<Promise<TReturn>, RootState, never, TItemActions>
>;
