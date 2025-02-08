import { RouteObject } from "react-router-dom";
import Login from "../pages/auth/Login";
import HomeChat from "../pages/chat/HomeChat";

const publicRouter: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <HomeChat />,
  },
];

export default publicRouter;
