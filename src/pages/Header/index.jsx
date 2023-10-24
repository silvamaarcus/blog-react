import logo from "../../svg/blog-logo.svg";

//Link
import { Link, useNavigate } from "react-router-dom";

//Hooks
import { useState } from "react";

const Header = () => {
  // Objeto que representa o estado inicial do formulário.
  const initialValueForm = {
    // Única propriedade chamada "search" que está inicialmente definida como uma string vazia.
    search: "",
  };

  // Variaveis de estado iniciando com valor vazio (definido acima).
  const [form, setForm] = useState(initialValueForm);

  // A função 'onChange' é um manipulador de eventos que é chamado quando o conteúdo da caixa de pesquisa muda (geralmente, quando o usuário digita algo). Ele recebe um evento (event) como argumento.
  function onChange(event) {
    // Desestruturar o evento para obter o valor (value) e o nome (name) da propriedade do elemento HTML que desencadeou o evento.
    // value é o texto digitado pelo usuário.
    // name é o nome do campo (que no caso é "search").
    const { value, name } = event.target;
    // Atualizando o estado do formulário.
    // Cada letra que o usuario digitar no campo, será preenchida sem a necessidade de zerar ou recarregar o campo.
    setForm({ ...form, [name]: value });
  }

  // useNavigate para redirecionar.
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault(); // Evitando ação padrão do HTML.

    // Passando valor do inputo como paramentro para dentro da rota do URL.
    navigate(`/search/${form.search}`);
  }

  return (
    <>
      <header className="py-1 px-3">
        {/* <!-- BARRA DE NAVEGAÇÃO --> */}
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
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
            <form className="flex" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Buscar..."
                onChange={onChange}
              />
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
              <form className="flex" onSubmit={handleSearch}>
                <input
                  type="text"
                  name="search"
                  placeholder="Buscar..."
                  onChange={onChange}
                />
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
