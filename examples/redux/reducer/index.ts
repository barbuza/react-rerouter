import { Action, combineReducers } from "redux";

import { createReducer, IReactRouterReducerState } from "../../../src";
import { navigate } from "../routes";
import { asyncData, IAsyncDataReducerState } from "./asyncData";
import { auth, IAuthReducerState } from "./auth";

export { Action };

export interface IReduxState {
  asyncData: IAsyncDataReducerState;
  router: IReactRouterReducerState;
  auth: IAuthReducerState;
}

export const reducer = combineReducers<IReduxState>({
  asyncData,
  auth,
  router: createReducer(navigate),
});
