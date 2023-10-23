// Header e Footer
import Header from "../Header";
import Footer from "../Footer";

// Figuras
import LogoBlog from "../../svg/blog.svg";

const About = () => {
  return (
    <>
      <Header />

      <section className="container">
        <div className="row flex-start-row flex-wrap">
          <div className="grid-6">
            <h1 className="h0">
              blog<span>.</span>
            </h1>
            <p className="mt-1">
              O blog é uma projeto desenvolvido em React.js para o curso
              FrontPush. Clique abaixo para saber de mais informações.
            </p>
            <a href="#" className="btn mt-4">
              Saber mais
            </a>
          </div>

          <div className="grid-6">
            <img src={LogoBlog} className="ilustration" alt="" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
