import { lazy } from "react";
const Timeline = lazy(() => import("./"));

const timelineRoutes = [
  {
    exact: false,
    path: "/timeline",
    component: Timeline,
  },
];

export default timelineRoutes;
