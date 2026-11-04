import { useState } from "react";
export default function Header({ query, onQueryChange }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="header">
                <button className="menu-btn" onClick={() => setOpen(true)}>
                    ☰
                </button>
                <h1 className="logo">BAWA</h1>
                <input
                    type="search"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    className="search-bar"
                />
                <a href="default.asp">
                    <img src="placeholder.img" alt="Profile link" />
                    {/* Profile image pulls from database user */}
                </a>
                {/* Whishlist */}
            </header>

            {open && <div className="overlay" onClick={() => setOpen(false)} />}
            <nav className={`sidebar ${open ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setOpen(false)}>
                    x
                </button>
                <a href="/" onClick={() => setOpen(false)}>
                    Home
                </a>
                <a href="/frontpage" onClick={() => setOpen(false)}>
                    Frontpage
                </a>
                <a href="/about" onClick={() => setOpen(false)}>
                    About
                </a>
                <a href="/contact" onClick={() => setOpen(false)}>
                    Contact
                </a>
            </nav>
        </>
    );
}
