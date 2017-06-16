import { Action } from "redux";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export interface ILoginAction {
  type: typeof LOGIN;
}

export interface ILogoutAction {
  type: typeof LOGOUT;
}

export function isLoginAciton(action: Action): action is ILoginAction {
  return action.type === LOGIN;
}

export function isLogoutAction(action: Action): action is ILogoutAction {
  return action.type === LOGOUT;
}

export function createLoginAction(): ILoginAction {
  return { type: LOGIN };
}

export function createLogoutAction(): ILogoutAction {
  return { type: LOGOUT };
}
