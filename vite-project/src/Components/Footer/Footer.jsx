import { Link } from "react-router";

const Footer = () => {
return (

    <footer className=" fixed bottom-0 h-15 w-12/12 flex flex-row justify-around items-center bg-yellow-600">
      <article className="footerArticle">
        <h4 className="footerh4">Shortcuts</h4>
        <Link to="/contact" className="footerLink">
          Weather
        </Link>
        <Link to="/" className="footerLink">
          Home
        </Link>
      </article>
    </footer>
)

};

export default Footer;