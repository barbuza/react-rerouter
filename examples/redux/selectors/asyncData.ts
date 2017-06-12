import { IReduxState } from "../reducer";

export function isAsyncDataLoading(state: IReduxState): boolean {
  const dataKeys = Object.keys(state.asyncData);
  for (const key of dataKeys) {
    if (state.asyncData[key].loading) {
      return true;
    }
  }
  return false;
}
