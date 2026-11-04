import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <h3>Information about BAWA</h3>

            <nav>
                <Link to="/">Frontpage</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <h3>Terms and Privacy</h3>

            <nav>
                <Link to="/termsofuse">Terms of Use</Link>
                <Link to="/privacy">Privacy</Link>
                <Link to="/cookies">Cookies</Link>
            </nav>

            <h3>Guide</h3>
            {/* Coming soon! */}
        </footer>
    );
}

export default Footer;
