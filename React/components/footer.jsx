function Footer(){
    return(
        <>
            <footer className="footer">
                <h3>Information about BAWA</h3>
                <nav>
                    <a href="/frontpage" onClick={() => setOpen(false)}>Frontpage</a>
                    <a href="/about" onClick={() => setOpen(false)}>About</a>
                    <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
                </nav>
                <h3>Terms and Privacy</h3>
                    <a href="/terms" onClick={() => setOpen(false)}>terms of use</a>
                    <a href="/privacy" onClick={() => setOpen(false)}>Privacy polciy</a>
                    <a href="/cookies" onClick={() => setOpen(false)}>Cookies</a>
                <h3>Guide</h3>
                {/* Coming soon! */}
            </footer>
        </>
    )
}
export default Footer;