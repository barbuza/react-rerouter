import { Action } from "redux";
import { IReactComponent, isSetRouterStateAction } from "../../../src";
import { isSetAsyncDataAction } from "../actions/asyncData";
import { IAsyncData, isAsyncDataComponent } from "../components/AsyncData";

export interface IAsyncDataReducerState {
  [key: string]: IAsyncData<any>;
}

export function asyncData(state: IAsyncDataReducerState = {}, action: Action): IAsyncDataReducerState {
  if (isSetRouterStateAction<IReactComponent>(action)) {
    for (const pair of action.state.components) {
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

  if (isSetAsyncDataAction(action)) {
    return {
      ...state,
      [action.dataKey]: {
        data: action.data,
        loading: false,
      },
    };
  }

  return state;
}
