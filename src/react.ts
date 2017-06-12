import * as PropTypes from "prop-types";
import { ClassicComponentClass, ComponentClass, createElement, PureComponent, SFC } from "react";

import { IRouterReducerState } from "./reducer";

export type IReactComponent = ComponentClass<any> | SFC<any> | ClassicComponentClass<any>;
export type IReactRouterReducerState = IRouterReducerState<IReactComponent>;

export class Router extends PureComponent<IReactRouterReducerState, object> {

  public static propTypes = {
    components: PropTypes.arrayOf(
      PropTypes.shape({
        component: PropTypes.func.isRequired,
        keys: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
    ).isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    query: PropTypes.object.isRequired,
  };

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
