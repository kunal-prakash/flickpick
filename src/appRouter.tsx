import { createBrowserRouter, RouteObject } from "react-router-dom";
import Browse from "./components/Browse";
import Login from "./components/Login";

const routes: RouteObject[] = [
  { path: "/", element: <Login /> },
  {
    path: "/browse",
    element: <Browse />,
  },
];

export const appRouter = createBrowserRouter(routes);
