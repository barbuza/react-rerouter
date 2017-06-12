import { Action, Dispatch, MiddlewareAPI } from "redux";

import { isSetRouterStateAction } from "../../../src";

import { createSetAsyncDataAction } from "../actions/asyncData";
import { isAsyncDataComponent } from "../components/AsyncData";
import { IReduxState } from "../reducer";

export function asyncDataMiddleware(api: MiddlewareAPI<IReduxState>) {
  return (next: Dispatch<IReduxState>) => (action: Action) => {
    if (isSetRouterStateAction(action)) {
      for (const pair of action.payload.components) {
        const component = pair.component;
        if (isAsyncDataComponent(component)) {
          component.fetchData().then((data) => {
            api.dispatch(createSetAsyncDataAction(component.dataKey, data));
          });
        }
      }
    }
    return next(action);
  };
}
