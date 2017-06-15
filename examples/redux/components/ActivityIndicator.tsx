import * as React from "react";
import { connect } from "react-redux";
import { style } from "typestyle";

import { IReduxState } from "../reducer";
import { isAsyncDataLoading } from "../selectors";

const indicator = style({
  position: "fixed",
  right: 10,
  top: 10,
});

class ActivityIndicatorComponent extends React.PureComponent<{ loading: boolean }, object> {

  public render() {
    if (this.props.loading) {
      return (
        <div className={indicator}>
          loading
        </div>
      );
    }
    return null;
  }

}

function mapProps(state: IReduxState) {
  return {
    loading: isAsyncDataLoading(state),
  };
}

function mapActions() {
  return {};
}

export const ActivityIndicator: React.ComponentClass<object> =
  connect(mapProps, mapActions)(ActivityIndicatorComponent);
