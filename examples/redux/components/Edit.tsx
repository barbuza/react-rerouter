import * as React from "react";

import { AsyncDataComponent, connectAsync } from "./AsyncData";
import { loginRequired } from "./loginRequired";

interface IData {
  promised: number;
}

@loginRequired
@connectAsync
export class Edit extends AsyncDataComponent<IData, { id: string }> {

  public static dataKey = "edit";

  public static async fetchData(): Promise<IData> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { promised: Math.random() };
  }

  public render() {
    return (
      <div>
        edit {this.props.id}
        {this.props.loading ?
          <div>loading</div> :
          <div>promised {this.props.data && this.props.data.promised}</div>
        }
      </div>
    );
  }

}
