import { createNavigateAction, SET_ROUTER_STATE } from "./actions";
import { route } from "./route";

describe("actions", () => {
  it("match", () => {
    const navigate = createNavigateAction(
      route("/", "layout",
        route("/", "index"),
        route("/page/:name", "page",
          route("/", "view"),
          route("/edit", "edit"),
        ),
      ),
    );

    expect(navigate("/", {})).toEqual({
      state: {
        components: [
          { component: "layout", keys: [] },
          { component: "index", keys: [] },
        ],
        params: {},
        path: "/",
        query: {},
      },
      type: SET_ROUTER_STATE,
    });

    expect(navigate("/page/foo", {})).toEqual({
      state: {
        components: [
          { component: "layout", keys: [] },
          { component: "page", keys: ["name"] },
          { component: "view", keys: ["name"] },
        ],
        params: { name: "foo" },
        path: "/page/foo",
        query: {},
      },
      type: SET_ROUTER_STATE,
    });

    expect(navigate("/page/foo/edit", {})).toEqual({
      state: {
        components: [
          { component: "layout", keys: [] },
          { component: "page", keys: ["name"] },
          { component: "edit", keys: ["name"] },
        ],
        params: { name: "foo" },
        path: "/page/foo/edit",
        query: {},
      },
      type: SET_ROUTER_STATE,
    });
  });
});
