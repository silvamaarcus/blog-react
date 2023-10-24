// Header e Footer
import Header from "../Header";
import Footer from "../Footer";

// Card
import Card from "../../pages/Home/Card";

// Parametros de URL
import { useParams } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

// APi
import api from "../../services/api";

const Search = () => {
  const { word_search } = useParams();

  //Variaveis de estado
  const [word, setWord] = useState(word_search);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    if (word) {
      api.get(`/posts?q=${word}`).then((response) => {
        setSearch(response.data);
      });
    }
  }, [word]);

  return (
    <>
      <Header />

      <div class="bg-section">
        <section class="container">
          <h3 class="ml-2 mb-3">Mais vistos</h3>
          <div class="row">
            {search.map((item) => {
              return <Card key={item.id} content={item} />;
            })}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Search;
