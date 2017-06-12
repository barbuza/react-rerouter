import * as React from "react";

export const User: React.SFC<{ id: string }> = (props) => (
  <div>
    <nav>
      <a href={`#/user/${props.id}`}>profile</a>
      <a style={{ marginLeft: 10 }} href={`#/user/${props.id}/edit`}>edit</a>
    </nav>
    {props.children}
  </div>
);
