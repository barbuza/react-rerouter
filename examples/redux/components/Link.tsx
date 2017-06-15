import * as React from "react";
import { style } from "typestyle";

const link = style({
  marginRight: 10,
});

export const Link: React.SFC<{ to: string }> = (props) => (
  <a className={link} href={`#${props.to}`}>
    {props.children}
  </a>
);
