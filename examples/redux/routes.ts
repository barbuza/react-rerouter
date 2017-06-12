import { createNavigateAction, ISetRouterStateAction, route } from "../../src";
import { Edit } from "./components/Edit";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Profile } from "./components/Profile";
import { User } from "./components/User";

export { ISetRouterStateAction };

const routes = route("/", Layout,
  route("/", Home),
  route("/user/:id", User,
    route("/", Profile),
    route("/edit", Edit),
  ),
);

export const navigate = createNavigateAction(routes);
