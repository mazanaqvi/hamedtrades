import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { INVITE_URL } from "./invite.js";
import { useTheme } from "./theme.jsx";

const TITLES = {
  "/": "Hamed Trades — Discord bot",
  "/terms": "Terms of Service — Hamed Trades",
  "/privacy": "Privacy Policy — Hamed Trades",
};

export function Layout({ children }) {
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] ?? "Hamed Trades";
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="top">
        <Link className="mark" to="/">
          <img src={`${import.meta.env.BASE_URL}hamed_trades.png`} alt="" width="40" height="40" />
          <span>Hamed Trades</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          <NavLink to="/terms">Terms</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M21 14.4A8.4 8.4 0 0 1 9.6 3a7 7 0 1 0 11.4 11.4z"
              />
            </svg>
          </button>
          <a className="button" href={INVITE_URL}>
            Add to Discord
          </a>
        </nav>
      </header>
      <main id="content">{children}</main>
      <footer className="wrap site-footer">
        <span>Hamed Trades is not affiliated with Discord Inc.</span>
        <nav aria-label="Legal">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </nav>
      </footer>
    </>
  );
}
