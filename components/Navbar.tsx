export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="/" className="brand">
          <span className="brand-mark">✈</span>
          <span>fly-tuts</span>
        </a>

        <nav className="nav-links">
          <a href="#categories" className="nav-link">
            Categories
          </a>
          <a href="#featured" className="nav-link">
            Tutorials
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
