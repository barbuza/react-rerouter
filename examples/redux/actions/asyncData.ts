import { Action } from "redux";
export const SET_ASYNC_DATA = "SET_ASYNC_DATA";

export interface ISetAsyncDataAction {
  data: any;
  dataKey: string;
  type: typeof SET_ASYNC_DATA;
}

export function isSetAsyncDataAction(action: Action): action is ISetAsyncDataAction {
  return action.type === SET_ASYNC_DATA;
}

export function createSetAsyncDataAction(dataKey: string, data: any): ISetAsyncDataAction {
  return {
    data,
    dataKey,
    type: SET_ASYNC_DATA,
  };
}
