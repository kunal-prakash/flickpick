import { RouterProvider } from "react-router-dom";
import { appRouter } from "../appRouter";

export default function Body() {
  return <RouterProvider router={appRouter} />;
}
