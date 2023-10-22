import logo from "../../svg/blog-logo.svg";
import iconFacebook from "../../svg/icon-facebook.svg";
import iconInstagram from "../../svg/icon-instagram.svg";
import iconYoutube from "../../svg/icon-youtube.svg";
import iconTwitter from "../../svg/icon-twitter.svg";

const Footer = () => {
  return (
    <>
      {/* <!--=========== FOOTER ===========--> */}
      <footer className="container">
        <div className="row">
          <div className="flex-center flex-column">
            <div className="logo">
              <a href="">
                <img src={logo} alt="" />
              </a>
            </div>
            <h4>
              blog<span>.</span>
            </h4>
          </div>
        </div>

        <div className="row mt-7 bb-black">
          <div className="footer-links">
            <div className="grid-3">
              <h4>Posts</h4>
              <ul className="list">
                <li className="list-item my-2 ml-1">
                  <a href="#" className="color-gray">
                    Mais vistos
                  </a>
                </li>
                <li className="list-item my-2 ml-1">
                  <a href="#" className="color-gray">
                    Mais comentados
                  </a>
                </li>
                <li className="list-item my-2 ml-1">
                  <a href="#" className="color-gray">
                    Mais populares
                  </a>
                </li>
                <li className="list-item my-2 ml-1">
                  <a href="#" className="color-gray">
                    Mais recentes
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid-4">
              <h4>Categorias</h4>
              <ul className="list">
                <li className="list-item my-2 ml-1">
                  <a href="#" className="color-gray">
                    Tecnologia
                  </a>
                </li>
                <li className="list-item my-2 ml-1">
                  <a href="#" className="color-gray">
                    Games
                  </a>
                </li>
                <li className="list-item my-2 ml-1">
                  <a href="#" className="color-gray">
                    Fotografia
                  </a>
                </li>
                <li className="list-item my-2 ml-1">
                  <a href="#" className="color-gray">
                    Cinema
                  </a>
                </li>
                <li className="list-item my-2 ml-1">
                  <a href="#" className="color-gray">
                    Entreterimento
                  </a>
                </li>
                <li className="list-item my-2 ml-1">
                  <a href="#" className="color-gray">
                    Moda
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-news flex-wrap">
            <div className="grid-5">
              <h4>Quer ser avisado dos novos posts do blog?</h4>
              <p className="mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                urna pharetra ut ac, pellentesque.
              </p>
              <form className="flex-start-row mt-2 h-auto">
                <input
                  type="text"
                  name="newsletter"
                  placeholder="Digite seu e-mail aqui"
                />
                <a href="#" className="btn w-50">
                  Cadastrar
                </a>
              </form>
            </div>
          </div>
        </div>

        <div className="flex-space mt-7 social-media px-2">
          <p>2022 | Todos os direitos reservados.</p>
          <div className="flex">
            <a href="#">
              <img src={iconFacebook} alt="" />
            </a>
            <a href="#" className="ml-5">
              <img src={iconInstagram} alt="" />
            </a>
            <a href="#" className="ml-5">
              <img src={iconYoutube} alt="" />
            </a>
            <a href="#" className="ml-5">
              <img src={iconTwitter} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
