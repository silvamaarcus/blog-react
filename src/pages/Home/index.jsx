// Componentes:
import Hero from "./Hero";
import Banner from "./Banner";
import Card from "./Card";
import Main from "./Main";

// Figuras
import star from "../../svg/icon-star.svg";

//API
import api from "../../services/api";

//Hooks
import { useState, useEffect } from "react";

const Home = () => {
  // Variáveis de estado:

  // Section Main
  // main -> variável de estado.
  // setMain -> função que vai atualizar esse estado.
  const [main, setMain] = useState([]);
  // Section More Views
  const [mostseen, setMostseen] = useState([]);
  // Section Banner
  const [banner, setBanner] = useState([]);

  //Requisições:

  // Faça isso, quando executar o componente.
  useEffect(() => {
    // Puxando informações dos "posts" c/ metodo get()
    // Aplicando filtros com parametros:
    // posts -> postagens do JSON.
    // star=5 -> postagens com 5 estrelas de nota.
    // _limit=2 -> limitar busca por 2 postagens apenas.
    // order=desc -> listar em ordem descrescente.
    // _sort=date -> listar por data de criação.

    // Requisição para listar posts com nota (star) igual a 5.
    api.get("/posts?star=5&_limit=2&order=desc").then((r) => {
      setMain(r.data);
    });
    // Requisição para listar o último banner adicionado.
    api.get("/posts?_sort=date&order=desc&_limit=1").then((r) => {
      setBanner(r.data);
    });
    // Requisição para listar 3 posts.
    api.get("/posts?_limit=3").then((r) => {
      setMostseen(r.data);
    });
  }, []);

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
            {main.map((item) => {
              return <Main key={item.id} content={item} />;
            })}
          </div>
        </div>
      </main>

      <div class="bg-section">
        <section class="container">
          <h3 class="ml-2 mb-3">Mais vistos</h3>
          <div class="row">
            {mostseen.map((card) => {
              return <Card key={card.id} content={card} />;
            })}
          </div>
        </section>
      </div>

      {banner.map((banner) => {
        return <Banner key={banner.id} content={banner} />;
      })}
    </>
  );
};

export default Home;