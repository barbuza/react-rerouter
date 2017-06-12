import { flatten } from "./flatten";
import { route } from "./route";

describe("route", () => {
  it("flatten", () => {
    const flat = flatten(
      route("/", "layout",
        route("/", "index"),
        route("/pages", "pages",
          route("/foo", "foo"),
          route("/bar", "bar"),
          route("/spam/:spam", "spam"),
        ),
        route("/users/:id", "users",
          route("/profile/:tab", "profile"),
        ),
      ),
    );

    expect(flat).toEqual([
      {
        components: [
          { component: "layout", keys: [] },
          { component: "index", keys: [] },
        ],
        pattern: "/",
      },
      {
        components: [
          { component: "layout", keys: [] },
          { component: "pages", keys: [] },
          { component: "foo", keys: [] },
        ],
        pattern: "/pages/foo",
      },
      {
        components: [
          { component: "layout", keys: [] },
          { component: "pages", keys: [] },
          { component: "bar", keys: [] },
        ],
        pattern: "/pages/bar",
      },
      {
        components: [
          { component: "layout", keys: [] },
          { component: "pages", keys: [] },
          { component: "spam", keys: ["spam"] },
        ],
        pattern: "/pages/spam/:spam",
      },
      {
        components: [
          { component: "layout", keys: [] },
          { component: "users", keys: ["id"] },
          { component: "profile", keys: ["id", "tab"] },
        ],
        pattern: "/users/:id/profile/:tab",
      },
    ]);
  });
});
