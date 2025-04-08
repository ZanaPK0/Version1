/**
 * NasdaqStockChange.jsx
 * This component manages and displays stock price changes for selected NASDAQ companies.
 * It allows users to fetch and view stock data, select additional stocks, and handle notifications.
 *
 * Redux:
 * - Uses `useDispatch` to fetch stock price changes via `fetchStockPriceChange`.
 * - Uses `useSelector` to access `priceChanges` from the Redux store.
 *
 * States handled:
 * - `showCompanies`: Controls whether the NASDAQ company list dropdown is visible.
 * - `companyCards`: Stores the selected companies to display.
 * - `snackbar`: Displays notifications when a stock is searched or already selected.
 */










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