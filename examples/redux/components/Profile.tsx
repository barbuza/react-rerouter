import * as React from "react";

export const Profile: React.SFC<{ id: string }> = (props) => (
  <div>
    profile {props.id}
  </div>
);
