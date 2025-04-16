import App from "../App";
import Home from "../Pages/Home";
import PageOne from "../Pages/PageOne";
import PageTwo from "../Pages/PageTwo";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //Parent wrapper for all routes, containts <Outlet /> to render children.
    children: [
      {
        index: true,
        element: <Home />, // Rendered at the root / since index: true.
      },
      // PageOne and PageTwo are sibling routes accessible at /PageOne and /PageTwo.
      {
        path: "PageOne",
        element: <PageOne />,
      },
      {
        path: "PageTwo",
        element: <PageTwo />,
      },
    ],
  },
]);

export default router;
