import * as React from "react";
import { ComponentClass } from "react";
import { connect } from "react-redux";
import { IReduxState } from "../reducer";

export interface IAsyncData<T> {
  data?: T;
  loading: boolean;
}

export interface IAsyncDataClass<D, P> extends ComponentClass<IAsyncData<D> & P> {
  dataKey: string;
  fetchData(): Promise<D>;
}

export function isAsyncDataComponent<D, P>(component: any): component is IAsyncDataClass<D, P> {
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

}

function mapProps(key: string) {
  return (state: IReduxState) => state.asyncData[key];
}

export function connectAsync<D, P, T extends IAsyncDataClass<D, P>>(cls: T): T {
  return connect(mapProps(cls.dataKey))(cls) as T;
}
