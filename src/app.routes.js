import loginRoutes from "./pages/Login/login.routes";
import timelineRoutes from "./pages/Timeline/timeline.routes";

const appRoutes = [...loginRoutes, ...timelineRoutes];

export default appRoutes;
