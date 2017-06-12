import { ClassicComponentClass, ComponentClass, createElement, PureComponent, SFC } from "react";
import { IRouterReducerState } from "./reducer";

export type IReactComponent = ComponentClass<any> | SFC<any> | ClassicComponentClass<any>;
export type IReactRouterReducerState = IRouterReducerState<IReactComponent>;

export class Router extends PureComponent<IReactRouterReducerState, object> {

  public render() {
    if (!this.props.components.length) {
      return null;
    }
    return this.props.components.reduceRight<JSX.Element | null>((child, pair) => {
      let props: { [key: string]: string | undefined } | undefined;
      if (pair.keys.length) {
        props = pair.keys.reduce((agg, key) => ({ ...agg, [key]: this.props.params[key] }), {});
      }
      if (child) {
        return createElement(pair.component as any, props, child);
      }
      return createElement(pair.component as any, props);
    }, null);
  }

}
