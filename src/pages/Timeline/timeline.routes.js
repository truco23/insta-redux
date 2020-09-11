import { lazy } from "react";
const Timeline = lazy(() => import("./"));

const timelineRoutes = [
  {
    exact: true,
    path: "/timeline",
    component: Timeline,
  },
];

export default timelineRoutes;
