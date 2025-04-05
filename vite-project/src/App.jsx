import { Outlet } from 'react-router'
import Header from "../src/Components/Header/Header"
import Footer from "../src/Components/Footer/Footer"


function App() {

  return (
    <>
     <Header pageOneName="secondtext" />
     <Outlet />
     <Footer />
    </>
  );
}

export default App
