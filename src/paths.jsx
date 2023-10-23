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
          <Route path="/post" element={<Post />} />
          <Route path="/search" element={<Search />} />
          {/* Quando qualquer página, além das listadas acima, for acessada: */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;
