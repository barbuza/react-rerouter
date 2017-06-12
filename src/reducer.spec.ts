import { createNavigateAction } from "./actions";
import { createReducer } from "./reducer";
import { route } from "./route";

describe("reducer", () => {
  it("match", () => {
    const routes = route("/", "layout",
      route("/", "index"),
      route("/page/:name", "page"),
    );

    const navigate = createNavigateAction(routes);
    const reducer = createReducer(navigate);

    const state1 = reducer(undefined, { type: "any" });
    expect(state1).toEqual({
      components: [
        { component: "layout", keys: [] },
        { component: "index", keys: [] },
      ],
      params: {},
      path: "/",
      query: {},
    });

    const state2 = reducer(state1, { type: "random" });
    expect(state2).toBe(state1);

    const state3 = reducer(state2, navigate("/page/foo", {}));
    expect(state3).toEqual({
      components: [
        { component: "layout", keys: [] },
        { component: "page", keys: ["name"] },
      ],
      params: { name: "foo" },
      path: "/page/foo",
      query: {},
    });

    const state4 = reducer(state3, navigate("/404", {}));
    expect(state4).toEqual({
      components: [],
      params: {},
      path: "/404",
      query: {},
    });
  });
});
