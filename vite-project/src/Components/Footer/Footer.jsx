import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" fixed bottom-0 h-15 w-12/12 flex flex-row justify-around items-center bg-yellow-500 dark:bg-gray-900">
      <article className="footerArticle">
        <Link to="/" className="footerLink dark:text-white">
          Home
        </Link>
      </article>
    </footer>
  );
};

export default Footer;
