import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

//Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Home from "./pages/Home";

const Paths = () => {
  return (
    <>
      {/* Envolvendo estruturas com BrowserRouter */}
      <BrowserRouter>
        {/* Estabelecendo rotas das páginas. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

          {/* :idPost -> Faremos uma requisição através do número setado neste id.
          Em seguida, o número será passado como parametro na url e carregará página com post escolhido.
          Isso tudo se dá usando o "useParams", no componente Post.
          */}
          <Route path="/post/:idPost" element={<Post />} />
          {/* Mesmo passo anterior, desta vez, será passado uma string. */}
          <Route path="search/:word_search" element={<Search />} />
          {/* Quando qualquer página, além das listadas acima, for acessada: */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
