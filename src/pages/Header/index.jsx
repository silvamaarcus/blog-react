import logo from "../../svg/blog-logo.svg";

//Link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-1 px-3">
        {/* <!-- BARRA DE NAVEGAÇÃO --> */}
        <nav>
          <div className="logo">
            <Link to="/">
              <img src= {logo} alt="" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/about">Sobre</Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </nav>

        {/* <!-- MENU HAMBURGUER --> */}
        <div className="bx"></div>

        <div className="flex-start-row">
          <div className="search">
            <form className="flex">
              <input type="text" name="search" placeholder="Buscar..." />
              <button className="btn-search"></button>
            </form>
          </div>

          <div className="cta-desktop ml-3">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
          <div className="cta-mobile">
            <Link to="/login" className="link color-primary">
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* <!--=========== MENU MOBILE ===========--> */}
      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="/about" className="link-menu-mobile">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-menu-mobile">
                Contato
              </Link>
            </li>
            <li className="py-2 px-2">
              <form className="flex">
                <input type="text" name="search" placeholder="Buscar..." />
                <button className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
