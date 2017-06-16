import * as React from "react";

import { ActivityIndicator } from "./ActivityIndicator";
import { Link } from "./Link";
import { LoginForm } from "./LoginForm";

export const Layout: React.SFC<object> = (props) => (
  <div>
    <ActivityIndicator />
    <nav>
      <Link to="/">home</Link>
      <Link to="/user/alice">alice</Link>
      <Link to="/user/bob">bob</Link>
      <LoginForm />
    </nav>
    {props.children}
  </div>
);
