import { getKeys, matchPath } from "./match";

describe("matchPath", () => {
  it("getKeys", () => {
    expect(getKeys("/")).toEqual([]);
    expect(getKeys("/foo/:bar/spam/:eggs")).toEqual(["bar", "eggs"]);
  });

  it("matchPath", () => {
    expect(matchPath("/", "/")).toEqual({});
    expect(matchPath("/", "/foo")).toBeUndefined();
    expect(matchPath("/:foo/:spam", "/bar/eggs")).toEqual({ foo: "bar", spam: "eggs" });
    expect(matchPath("/:foo/:spam", "/bar")).toBeUndefined();
  });
});
