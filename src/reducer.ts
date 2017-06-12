import { ISetRouterStateAction, isSetRouterStateAction } from "./actions";
import { IComponentPair } from "./flatten";

export interface IRouterReducerState<T> {
  path: string;
  query: {};
  components: Array<IComponentPair<T>>;
  params: { [key: string]: string | undefined };
}

export function createReducer<T>(navigate: (path: string, query: {}) => ISetRouterStateAction<T>) {
  const initialState = navigate("/", {}).payload;

  return (state: IRouterReducerState<T> = initialState, action: { type: any }): IRouterReducerState<T> => {
    if (isSetRouterStateAction<T>(action)) {
      return action.payload;
    }

    return state;
  };
}
