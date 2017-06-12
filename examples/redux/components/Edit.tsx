import * as React from "react";

export const Edit: React.SFC<{ id: string }> = (props) => (
  <div>
    edit {props.id}
  </div>
);
