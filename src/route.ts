import { getKeys } from "./match";

export interface IRoute<T> {
  children: RouteChildren<T>;
  component: T;
  keys: string[];
  pattern: string;
}

export type RouteChildren<T> = Array<IRoute<T>>;

export function route<T>(pattern: string, component: T, ...children: any[]): IRoute<T> {
  const keys = getKeys(pattern);
  return {
    children,
    component,
    keys,
    pattern,
  };
}
