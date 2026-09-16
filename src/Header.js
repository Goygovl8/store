import logo from "./logo.png"

function Header() {
  return (
    <header>
      <div className="logoBlock">
        <img src={logo} />
      </div>
      <div>
        <nav>
          <a href="#" class="link">Home</a>
          <a href="#" class="link">About</a>
          <a href="#" class="link">Contacts</a>
        </nav>
      </div>

      <div>
        <button className="btn">Push</button>
      </div>
    </header>
  );
}

export default Header;
