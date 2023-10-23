// Componentes:
import Hero from "./Hero";
import Banner from "./Banner";
import Card from "./Card";
import Main from "./Main";

// Figuras
import star from "../../svg/icon-star.svg";

const Home = () => {
  return (
    <>
      <Hero />
      
      <main className="container">
        <div className="row">
          <div className="grid-6 pt-5 pb-3">
            <img src={star} alt="" className="icon-l" />
            <h2>Os melhores e mais bem votados posts do mês.</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error,
              optio atque. Vero aliquam modi earum illum quos, provident
              praesentium. Reprehenderit alias illo nostrum, necessitatibus
              quibusdam maiores dicta velit recusandae ratione.
            </p>
          </div>

          <div className="grid-6">
            <Main />
            <Main />
          </div>
        </div>
      </main>

      <div class="bg-section">
        <section class="container">
          <h3 class="ml-2 mb-3">Mais vistos</h3>
          <div class="row">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>

      <Banner />
    </>
  );
};

export default Home;
