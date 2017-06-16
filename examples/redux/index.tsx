import { createHashHistory } from "history";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";

import { App } from "./components/App";
import { asyncDataMiddleware } from "./middleware";
import { reducer } from "./reducer";
import { navigate } from "./routes";

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
    <App />
  </Provider>,
  root,
);
