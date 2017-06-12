import { flatten, IFlatRoute } from "./flatten";
import { matchPath } from "./match";
import { IRouterReducerState } from "./reducer";
import { IRoute } from "./route";

export const SET_ROUTER_STATE = "ROUTER_SET_STATE";

export interface ISetRouterStateAction<T> {
  payload: IRouterReducerState<T>;
  type: typeof SET_ROUTER_STATE;
}

export function isSetRouterStateAction<T>(action: { type: any }): action is ISetRouterStateAction<T> {
  return action.type === SET_ROUTER_STATE;
}

export function locationChangeToState<T>(flatRoutes: Array<IFlatRoute<T>>,
                                         path: string, query: {}): IRouterReducerState<T> {
  for (const route of flatRoutes) {
    const match = matchPath(route.pattern, path);
    if (match) {
      return {
        components: route.components,
        params: match,
        path,
        query,
      };
    }
  }
  return {
    components: [],
    params: {},
    path,
    query,
  };
}

export type Navigate<T> = (path: string, query: {}) => ISetRouterStateAction<T>;

export function createNavigateAction<T>(route: IRoute<T>): Navigate<T> {
  const flatRoutes = flatten(route);
  return (path: string, query: {}) => {
    return {
      payload: locationChangeToState(flatRoutes, path, query),
      type: SET_ROUTER_STATE,
    };
  };
}
