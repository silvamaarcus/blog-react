// Header e Footer
import Header from "../Header";
import Footer from "../Footer";

// Imagens de Profile
import ImgProfile from "../../profile/juliana.png";

const Profile = () => {
  return (
    <>
      <Header />

      <section className="container">
        <div className="row">
          <div className="grid-6">
            <div className="flex-start-row">
              <div className="profile-big">
                <img src={ImgProfile} className="profile-img" alt="" />
              </div>
              <div className="ml-3">
                <h3>Selina Kyle</h3>
                <h6 className="color-gray">@selinakyle</h6>
              </div>
            </div>
            <p className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              eum, eos temporibus sunt.
            </p>
          </div>

          <div className="grid-6 flex-center">
            <a href="#" className="btn">
              Meus dados
            </a>
            <a href="#" className="btn ml-3">
              Adicionar posts
            </a>
          </div>
        </div>
      </section>

      <div className="container">
        <h3>Adicionar um novo post</h3>
        <p className="mt-1">Preencha os campos abaixo para adicionar um novo post ao blog.</p>
        <form>
            <div className="row">
                <div className="grid-3 p-0">
                    <label for="date">
                        <h6>Data</h6>
                    </label>
                    <input type="date" name="date" id="date" className="mt-1" />
                </div>

                <div className="grid-3 p-0">
                    <label for="category">
                        <h6>Categoria</h6>
                    </label>
                    <select id="category" className="mt-1 uppercase">
                        <option value="tecnologia">tecnologia</option>
                        <option value="games">games</option>
                        <option value="cinema">cinema</option>
                        <option value="fotografia">fotografia</option>
                    </select>
                </div>

                <div className="grid-6 p-0">
                    <label for="title">
                        <h6>Título</h6>
                    </label>
                    <input type="text" name="title" className="mt-1" />
                </div>
            </div>

            <div className="row">
                <div className="grid-9 p-0">
                    <label for="resume">
                        <h6>Resumo</h6>
                    </label>
                    <input type="text" id="resume" name="resume" className="mt-1" />
                </div>

                <div className="grid-3 p-0">
                    <label for="duration">
                        <h6>Duração</h6>
                    </label>
                    <select id="duration" className="mt-1">
                        <option value="tecnologia">5min</option>
                        <option value="games">10min</option>
                        <option value="cinema">7min</option>
                        <option value="fotografia">6min</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="grid-12 p-0">
                    <label for="description">
                        <h6>Descrição</h6>
                    </label>
                    <textarea name="description" id="description" className="w-100" rows="10"></textarea>
                </div>
            </div>

            <div className="row flex-end-row">
                <button className="btn mr-2">Adicionar</button>
            </div>

        </form>
    </div>


      <Footer />
    </>
  );
};

export default Profile;
