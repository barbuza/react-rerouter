import { Promise } from "es6-promise";
import * as React from "react";

import { AsyncDataComponent, connectAsync } from "./AsyncData";

@connectAsync
export class Edit extends AsyncDataComponent<{ promised: number }, { id: string }> {

  public static dataKey = "edit";

  public static fetchData() {
    return new Promise((resolve) => setTimeout(resolve, 1000))
      .then(() => Math.random());
  }

  public render() {
    return (
      <div>
        edit {this.props.id}
        {this.props.loading ?
          <div>loading</div> :
          <div>promised {this.props.data}</div>
        }
      </div>
    );
  }

}
