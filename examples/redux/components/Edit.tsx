import * as React from "react";
import { connect } from "react-redux";
import { AsyncDataComponent } from "./AsyncData";

class EditComponent extends AsyncDataComponent<{ promised: number }, { id: string }> {

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

export const Edit: React.ComponentClass<object> = connect(AsyncDataComponent.mapProps(EditComponent.dataKey))(
  EditComponent,
);
