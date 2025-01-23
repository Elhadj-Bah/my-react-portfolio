import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <h1>
          Elhadj<span className="seo"></span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
