// Header e Footer
import Header from "../Header";
import Footer from "../Footer";

//Figuras
import Logo from "../../svg/blog-logo2.svg";

const Login = () => {
  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-4 disappear"></div>

          <div className="grid-4">
            <div className="flex-center">
              <img src={Logo} className="icon-l" alt="" />
            </div>
            <h5 className="text-center">Olá, faça login para continuar.</h5>
            <form>
              <input
                type="text"
                name="user"
                className="mt-3"
                placeholder="Digite seu usuário"
              />
              <input
                type="password"
                name="password"
                className="my-2"
                placeholder="Digite sua senha"
              />

              <div className="text-center mt-1">
                <div className="card-danger mb-1">
                  <p className="py-1">Olá, isso é uma mensagem de erro</p>
                </div>
                <div className="card-success mb-1">
                  <p className="py-1">Olá, isso é uma mensagem de erro</p>
                </div>
                <div className="card-warning mb-1">
                  <p className="py-1">Olá, isso é uma mensagem de erro</p>
                </div>
                <div className="card-info mb-1">
                  <p className="py-1">Olá, isso é uma mensagem de erro</p>
                </div>
              </div>

              <button className="btn w-100 mt-4">Entrar</button>
            </form>
          </div>

          <div className="grid-4 disappear"></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Login;
