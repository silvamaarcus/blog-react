// Header e Footer
import Header from "../Header";
import Footer from "../Footer";

// Icons
import IconFacebook from "../../svg/icon-facebook.svg";
import IconInstagram from "../../svg/icon-instagram.svg";
import IconYoutube from "../../svg/icon-youtube.svg";
import IconTwitter from "../../svg/icon-twitter.svg";

// Pegando número correto do id para setar a url.
// useParams
import { useParams } from "react-router-dom";

// Hooks
import { useState, useEffect } from "react";

// API
import api from "../../services/api";

const Post = () => {
  //Variaveis de estado
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);

  // Desestruturação dos parâmetros da URL com useParams() para obter o valor da variável idPost.
  const { idPost } = useParams();

  // Fazendo requisição uma única vez por carregamento da página.
  useEffect(() => {
    // if (idPost) -> verificar se existe algo dentro da variavel "idPost".
    if (idPost) {
        // 1° requisição: Pegar o Post escolhido pelo usuario.
      api.get("/posts/" + idPost).then((response) => {
        // Setando o post escolhido na variavel "setPost".
        setPost(response.data);

        // 2° requisição: Pegar os dados Autor do Post escolhido pelo usuario.
        // id_user -> é uma chave no arquivo JSON, que será extraido da requisição acima.
        api.get("/user/" + response.data.id_user).then((r) => {
            // Setando o autor do post escolhido na variavel "setUser".
          setUser(r.data);
        });
      });
    }
  });

  return (
    <>
      <Header />

      <section className="container">
        <div className="row">
          <div className="grid-2 disappear"></div>

          <div className="grid-8 text-center p-0">
            <div>
              <h6 className="color-primary uppercase">{post.category}</h6>
              <h3>{post.title}</h3>
            </div>

            <div className="flex-center mt-3">
              <div>
                <img
                  src={user.ImageProfile}
                  className="profile profile-img"
                  alt=""
                />
              </div>
              <div className="ml-2 text-left">
                <h6 className="color-primary">
                  {user.name} {user.surname}
                </h6>
                <h6 className="color-gray">@{user.user}</h6>
              </div>
              <p className="ml-4">
                {post.date} - {post.duration}min.
              </p>
            </div>

            <div className="mt-3 w-100 mt-3git">
              <img src={post.imageUrl} alt="" />
            </div>

            <div className="mt-3">
              <h4 className="text-left">{post.title}</h4>
              <p className="text-left mt-2">{post.content}</p>
            </div>

            <div className="my-3">
              <h4 className="text-left">{post.title}</h4>
              <p className="text-left mt-2">{post.content}</p>
            </div>

            <div className="autor-card-post p-5">
              <div className="post-img">
                <img
                  src={user.ImageProfile}
                  className="profile-big profile-img"
                  alt=""
                />
              </div>
              <div className="post-user">
                <div className="ml-3">
                  <h5 className="text-left color-primary">
                    {user.name} {user.surname}
                  </h5>
                  <h6 className="text-left color-gray">@{user.user}</h6>
                </div>
              </div>
              <div className="post-social">
                <div className="flex-start-row">
                  <a href="#">
                    <img src={IconFacebook} alt="" />
                  </a>
                  <a href="#" className="px-1">
                    <img src={IconInstagram} alt="" />
                  </a>
                  <a href="#" className="px-1">
                    <img src={IconYoutube} alt="" />
                  </a>
                  <a href="#">
                    <img src={IconTwitter} alt="" />
                  </a>
                </div>
              </div>
              <div className="post-resume mt-2 ml-3">
                <p className="text-left">{user.description}</p>

                <a className="flex-start-row link color-primary mt-2">
                  Ver perfil
                </a>
              </div>
            </div>
          </div>

          <div className="grid-2 disappear"></div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Post;
