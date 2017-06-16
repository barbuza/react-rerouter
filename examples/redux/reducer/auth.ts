import { Action } from "redux";

import { isLoginAciton, isLogoutAction } from "../actions";

export interface IAuthReducerState {
  authenticated: boolean;
}

export function auth(state: IAuthReducerState = { authenticated: false }, action: Action): IAuthReducerState {

  if (isLoginAciton(action)) {
    return { ...state, authenticated: true };
  }

  if (isLogoutAction(action)) {
    return { ...state, authenticated: false };
  }

  return state;
}
