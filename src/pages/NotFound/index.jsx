// Header e Footer
import Header from "../Header";
import Footer from "../Footer";

// Figuras
import LogoBlog from "../../svg/blog-logo2.svg"

//Link
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Header />

      <section className="container">
        <div className="row">
            <div className="grid-4 disappear"></div>

            <div className="grid-4">
                <div className="flex-center">
                    <img src={LogoBlog} className="icon-l" alt="" />
                </div>
                <h1 className="h0 color-gradient text-center mt-3">404</h1>
                <h5 className="text-center mt-3">Página não encontrada!</h5>
                <p className="text-center mt-4">A página que você tá procurando não existe ou foi removida. Clique para voltar para o site.
                </p>
                <Link to="/" className="btn w-100 mt-4 text-center">Voltar p/ Home</Link>

            </div>

            <div className="grid-4 disappear"></div>
        </div>
    </section>
      
      <Footer />
    </>
  );
};

export default NotFound;