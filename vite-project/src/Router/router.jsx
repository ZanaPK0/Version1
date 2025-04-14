import App from "../App";
import Home from "../Pages/Home";
import PageOne from "../Pages/PageOne";
import PageTwo from "../Pages/PageTwo";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

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
