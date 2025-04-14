import { Outlet } from "react-router";

import Layout from "./Components/WeatherSearch/Layout";

// <Outlet/> is now children to <Layout> component.

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
