import { Action } from "redux";

import { IReactComponent, isSetRouterStateAction } from "../../../src";
import { isSetAsyncDataAction } from "../actions";
import { IAsyncData, isAsyncDataComponent } from "../components/AsyncData";

export interface IAsyncDataReducerState {
  [key: string]: IAsyncData<any>;
}

export function asyncData(state: IAsyncDataReducerState = {}, action: Action): IAsyncDataReducerState {

  /**
   * reset async data state for each component in routing tree on location change
   */
  if (isSetRouterStateAction<IReactComponent>(action)) {
    for (const pair of action.payload.components) {
      const component = pair.component;
      if (isAsyncDataComponent(component)) {
        state = {
          ...state,
          [component.dataKey]: {
            data: undefined,
            loading: true,
          },
        };
      }
    }
    return state;
  }

  /**
   * set async data when `fetchData` promise is resolved
   */
  if (isSetAsyncDataAction(action)) {
    return {
      ...state,
      [action.payload.dataKey]: {
        data: action.payload.data,
        loading: false,
      },
    };
  }

  return state;
}
