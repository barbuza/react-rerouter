import { createHashHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import { Router } from "../../src";

import { asyncDataMiddleware } from "./middleware";
import { IReduxState, reducer } from "./reducer";
import { navigate } from "./routes";

const ConnectedRouter: React.ComponentClass<object> = connect((state: IReduxState) => state.router, () => ({}))(Router);

const history = createHashHistory();
const store = createStore(reducer, applyMiddleware(asyncDataMiddleware, createLogger()));

history.listen((location) => {
  store.dispatch(navigate(location.pathname, {}));
});
store.dispatch(navigate(history.location.pathname, {}));

const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter />
  </Provider>,
  root,
);
