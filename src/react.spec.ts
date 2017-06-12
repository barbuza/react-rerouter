import { createElement, SFC } from "react";
import * as TestRenderer from "react-test-renderer";
import { IReactRouterReducerState, Router } from "./react";

const Div: SFC<any> = (props) => createElement("div", undefined, props.children);

const Pre: SFC<{ foo: string }> = (props) => createElement("pre", undefined, props.foo);

describe("react", () => {
  it("null", () => {
    const state: IReactRouterReducerState = {
      components: [],
      params: {},
      path: "/",
      query: {},
    };

    const renderer = TestRenderer.create(createElement(Router, state));
    expect(renderer.toJSON()).toBe(null);
  });

  it("single", () => {
    const state: IReactRouterReducerState = {
      components: [
        { component: Div, keys: [] },
      ],
      params: {},
      path: "/",
      query: {},
    };

    const renderer = TestRenderer.create(createElement(Router, state));
    expect(renderer.toJSON()).toEqual({
      children: null,
      props: {},
      type: "div",
    });
  });

  it("tree", () => {
    const state: IReactRouterReducerState = {
      components: [
        { component: Div, keys: [] },
        { component: Pre, keys: ["foo"] },
      ],
      params: { foo: "bar" },
      path: "/",
      query: {},
    };

    const renderer = TestRenderer.create(createElement(Router, state));
    expect(renderer.toJSON()).toEqual({
      children: [{
        children: ["bar"],
        props: {},
        type: "pre",
      }],
      props: {},
      type: "div",
    });
  });
});
