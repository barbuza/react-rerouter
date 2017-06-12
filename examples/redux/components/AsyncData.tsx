import * as React from "react";
import { IReduxState } from "../reducer";

export interface IAsyncData<T> {
  data?: T;
  loading: boolean;
}

export interface IAsyncDataClass {
  dataKey: string;
  fetchData(): Promise<any>;
}

export function isAsyncDataComponent(component: any): component is IAsyncDataClass {
  const target = component.WrappedComponent || component;
  if (target.prototype instanceof AsyncDataComponent) {
    if (!target.dataKey) {
      throw new Error("data key is not defined");
    }
    if (!target.fetchData) {
      throw new Error("fetch data is not defined");
    }
    return true;
  }
  return false;
}

export abstract class AsyncDataComponent<D, P = object, S = object> extends React.PureComponent<IAsyncData<D> & P, S> {

  public static mapProps(key: string) {
    return (state: IReduxState) => state.asyncData[key];
  }

}
