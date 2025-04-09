import Header from "../Header/Header";
import Footer from "../Footer/Footer";

//Experimenting with this layout for fun :D

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
