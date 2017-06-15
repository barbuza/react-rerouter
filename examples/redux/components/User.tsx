import * as React from "react";

import { Link } from "./Link";

export const User: React.SFC<{ id: string }> = (props) => (
  <div>
    <nav>
      <Link to={`/user/${props.id}`}>profile</Link>
      <Link to={`/user/${props.id}/edit`}>edit</Link>
    </nav>
    {props.children}
  </div>
);
