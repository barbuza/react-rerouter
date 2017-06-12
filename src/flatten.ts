import { IRoute } from "./route";

export interface IComponentPair<T> {
  component: T;
  keys: string[];
}

export interface IFlatRoute<T> {
  pattern: string;
  components: Array<IComponentPair<T>>;
}

export function flatten<T>(route: IRoute<T>, keys: string[] = []): Array<IFlatRoute<T>> {
  const result: Array<IFlatRoute<T>> = [];
  if (route.children.length) {
    for (const child of route.children) {
      for (const item of flatten<T>(child, route.keys)) {
        result.push({
          components: [
            { component: route.component, keys: route.keys },
          ].concat(item.components),
          pattern: route.pattern.replace(/\/$/, "") + "/" + item.pattern.replace(/^\//, ""),
        });
      }
    }
  } else {
    result.push({
      components: [
        { component: route.component, keys: keys.concat(route.keys) },
      ],
      pattern: route.pattern,
    });
  }
  return result;
}
