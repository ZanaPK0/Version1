import { Outlet } from "react-router";

import Layout from "./Components/WeatherSearch/Layout";

// <Outlet/> är nu children till <Layout> komponenten.

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
