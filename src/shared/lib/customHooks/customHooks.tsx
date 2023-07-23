import { RootState } from 'index';
import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook } from 'react-redux'
import {AppDispatch} from "shared/lib/GeneralTypes/ReduxTypes";

export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;