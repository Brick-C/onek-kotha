import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./publicRouter";

const router = createBrowserRouter([...publicRouter]) as ReturnType<
  typeof createBrowserRouter
>;

export default router;
