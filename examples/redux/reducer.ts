import { Action, combineReducers } from "redux";

import { createReducer, IReactRouterReducerState } from "../../src";
import { navigate } from "./routes";

export { Action };

export interface IReduxState {
  router: IReactRouterReducerState;
}

export const reducer = combineReducers<IReduxState>({
  router: createReducer(navigate),
});
