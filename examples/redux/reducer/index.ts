import { Action, combineReducers } from "redux";

import { createReducer, IReactRouterReducerState } from "../../../src";
import { navigate } from "../routes";
import { asyncData, IAsyncDataReducerState } from "./asyncData";

export { Action };

export interface IReduxState {
  asyncData: IAsyncDataReducerState;
  router: IReactRouterReducerState;
}

export const reducer = combineReducers<IReduxState>({
  asyncData,
  router: createReducer(navigate),
});
