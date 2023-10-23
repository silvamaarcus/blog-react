// Header e Footer
import Header from "../Header";
import Footer from "../Footer";

// Icons
import IconFacebook from "../../svg/icon-facebook.svg";
import IconInstagram from "../../svg/icon-instagram.svg";
import IconYoutube from "../../svg/icon-youtube.svg";
import IconTwitter from "../../svg/icon-twitter.svg";

// Imagens de Profile
import ImgProfile from "../../profile/alex.png"

// Imagem do Banner 
import ImgBanner from "../../img/01.png"

const Post = () => {
  return (
    <>
      <Header />

      <section className="container">
        <div className="row">
            <div className="grid-2 disappear"></div>

            <div className="grid-8 text-center p-0">
                <div>
                    <h6 className="color-primary uppercase">games</h6>
                    <h3>O que tem de novo no PS5?</h3>
                </div>

                <div className="flex-center mt-3">
                    <div><img src={ImgProfile} className="profile profile-img" alt=""/></div>
                    <div className="ml-2 text-left">
                        <h6 className="color-primary">Bruce Wayne</h6>
                        <h6 className="color-gray">Author</h6>
                    </div>
                    <p className="ml-4">Aug 2, 2020 - 8 min read</p>
                </div>

                <div className="mt-3 w-100 mt-3git">
                    <img src={ImgBanner} alt="" />
                </div>

                <div className="mt-3">
                    <h4 className="text-left">Esse aqui é o primeiro título</h4>
                    <p className="text-left mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper sapien nibh.</p>
                </div>

                <div className="my-3">
                    <h4 className="text-left">Esse aqui é o segundo título</h4>
                    <p className="text-left mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper sapien nibh.</p>
                    <p className="text-left mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper sapien nibh.</p>
                </div>

                <div className="autor-card-post p-5">
                    <div className="post-img">
                        <img src={ImgProfile} className="profile-big profile-img" alt=""/>
                    </div>
                    <div className="post-user">
                        <div className="ml-3">
                            <h5 className="text-left color-primary">Bruce Wayne</h5>
                            <h6 className="text-left color-gray">@brucewayne</h6>
                        </div>
                    </div>
                    <div className="post-social">
                        <div className="flex-start-row">
                            <a href="#"><img src={IconFacebook} alt="" /></a>
                            <a href="#" className="px-1"><img src={IconInstagram} alt="" /></a>
                            <a href="#" className="px-1"><img src={IconYoutube} alt="" /></a>
                            <a href="#"><img src={IconTwitter} alt="" /></a>
                        </div>
                    </div>
                    <div className="post-resume mt-2 ml-3">
                        <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna pharetra ut ac, pellentesque. Ultricies habitasse pretium purus viverra. Sit eget volutpat semper vitae metus, fringilla ullamcorper sapien nibh.</p>

                        <a className="flex-start-row link color-primary mt-2">Ver perfil</a>
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