import Navigation from "./Navigation";

function Header() {
  return (
    <div>
      <header className="header">
        <h1>
          Elhadj<span className="seo"></span>
        </h1>

        <Navigation />
      </header>
    </div>
  );
}

export default Header;
