import * as React from "react";
import { connect } from "react-redux";

import { Router } from "../../../src";
import { IReduxState } from "../reducer";
import { isLoginRequired } from "../selectors";
import { LoginForm } from "./LoginForm";

interface IAppProps {
  loginRequired: boolean;
}

function mapProps(state: IReduxState): IAppProps {
  return {
    loginRequired: isLoginRequired(state),
  };
}

const ConnectedRouter: React.ComponentClass<object> = connect((state: IReduxState) => state.router, () => ({}))(Router);

class AppComponent extends React.PureComponent<IAppProps, object> {

  public render() {
    if (this.props.loginRequired) {
      return <LoginForm />;
    }
    return <ConnectedRouter />;
  }

}

export const App: React.ComponentClass<object> = connect(mapProps, () => ({}))(AppComponent);
