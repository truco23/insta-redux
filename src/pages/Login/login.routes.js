import { lazy } from "react";
const Login = lazy(() => import("./"));

const loginRoutes = [
  {
    exact: true,
    path: "/",
    component: Login,
  },
];

export default loginRoutes;
