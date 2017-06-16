import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { createLoginAction, createLogoutAction } from "../actions";
import { IReduxState } from "../reducer";

export interface ILoginFormProps {
  authenticated: boolean;
}

interface ILoginFormActions {
  login: () => void;
  logout: () => void;
}

function mapProps(state: IReduxState): ILoginFormProps {
  return {
    authenticated: state.auth.authenticated,
  };
}

function mapActions(dispatch: Dispatch<IReduxState>): ILoginFormActions {
  return {
    login: () => dispatch(createLoginAction()),
    logout: () => dispatch(createLogoutAction()),
  };
}

class LoginFormComponent extends React.PureComponent<ILoginFormProps & ILoginFormActions, object> {

  public render() {
    return (
      <button onClick={this.props.authenticated ? this.props.logout : this.props.login}>
        {this.props.authenticated ? "logout" : "login"}
      </button>
    );
  }

}

export const LoginForm: React.ComponentClass<object> = connect(mapProps, mapActions)(LoginFormComponent);
