import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "../src/Router/router.jsx";
import store from "./Store/store.js";
import { Provider } from "react-redux";
import "./index.css";

console.log("router:", router);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

// Redux store becomes available to the entire app, useSelector and useDispatch relies on this wrapper (store)

// Takes router object created via createBrowserRouter(), Automatically handles route rendering based on path. (router)
