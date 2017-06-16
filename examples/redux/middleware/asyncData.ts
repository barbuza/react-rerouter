import { Action, Dispatch, MiddlewareAPI } from "redux";

import { IReactComponent, IRouterReducerState, isSetRouterStateAction } from "../../../src";

import { createSetAsyncDataAction, isLoginAciton } from "../actions";
import { isAsyncDataComponent } from "../components/AsyncData";
import { IReduxState } from "../reducer";
import { hasLoginRequiredComponent } from "../selectors/auth";

export function asyncDataMiddleware(api: MiddlewareAPI<IReduxState>) {

  function fire(state: IRouterReducerState<any>) {
    for (const pair of state.components) {
      const component = pair.component;
      if (isAsyncDataComponent(component)) {
        component.fetchData().then((data) => {
          api.dispatch(createSetAsyncDataAction(component.dataKey, data));
        });
      }
    }
  }

  return (next: Dispatch<IReduxState>) => (action: Action) => {
    /**
     * fire `fetchData` for each async component in routing tree
     */
    const state = api.getState();

    if (isSetRouterStateAction<IReactComponent>(action) &&
      (!hasLoginRequiredComponent(action.payload) || state.auth.authenticated)
    ) {
      fire(action.payload);
    } else if (isLoginAciton(action) && !state.auth.authenticated && hasLoginRequiredComponent(state.router)) {
      fire(state.router);
    }

    return next(action);
  };
}
