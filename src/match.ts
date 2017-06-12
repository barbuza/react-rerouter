import * as pathToRegexp from "path-to-regexp";

export function matchPath(pattern: string, path: string): undefined | {} {
  const keys: pathToRegexp.Key[] = [];
  const regex = pathToRegexp(pattern, keys);
  const match = regex.exec(path);
  if (!match) {
    return undefined;
  }
  return keys.reduce((res, key, index) => ({ ...res, [key.name.toString()]: match[index + 1] }), {});
}

export function getKeys(pattern: string): string[] {
  const keys: pathToRegexp.Key[] = [];
  pathToRegexp(pattern, keys);
  return keys.map((key) => key.name.toString());
}
