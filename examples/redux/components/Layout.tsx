import * as React from "react";

export const Layout: React.SFC<object> = (props) => (
  <div>
    <nav>
      <a href="#/">home</a>
      <a style={{ marginLeft: 10 }} href="#/user/alice">alice</a>
      <a style={{ marginLeft: 10 }} href="#/user/bob">bob</a>
    </nav>
    {props.children}
  </div>
);
