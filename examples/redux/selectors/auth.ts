import { IReactComponent, IRouterReducerState } from "../../../src";
import { isLoginRequiredComponent } from "../components/loginRequired";
import { IReduxState } from "../reducer";

export function hasLoginRequiredComponent(state: IRouterReducerState<IReactComponent>): boolean {
  for (const component of state.components) {
    if (isLoginRequiredComponent(component.component)) {
      return true;
    }
  }
  return false;

}

export function isLoginRequired(state: IReduxState) {
  if (state.auth.authenticated) {
    return false;
  }
  return hasLoginRequiredComponent(state.router);
}
