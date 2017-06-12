import * as React from "react";
import { connect } from "react-redux";
import { IReduxState } from "../reducer";
import { isAsyncDataLoading } from "../selectors";

class ActivityIndicatorComponent extends React.PureComponent<{ loading: boolean }, object> {

  public render() {
    let display: string = "none";
    if (this.props.loading) {
      display = "block";
    }

    return (
      <div style={{ position: "fixed", top: 10, right: 10, display }}>
        loading
      </div>
    );
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
