// Hooks
import { useState, useEffect } from "react";

// API
import api from "../../../services/api";

//Link
import { Link } from "react-router-dom";

const Main = ({ content }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Executar o código apenas se tiver algo dentro de content.
    if (content) {
      api.get("/user/" + content.id_user).then((r) => {
        setUser(r.data);
      });
    }
  }, []);

  return (
    <>
      <div className="bb-black py-3">
        <h6 className="uppercase color-gray">{content.date}</h6>
        <h6 className="uppercase color-primary">{content.category}</h6>
        <Link to={"/post/" + content.id}>
          <h5 className="mt-1">{content.title}</h5>
        </Link>
        <p className="mt-1">{content.resume}</p>

        <div className="flex mt-3">
          <div>
            <img
              src={user.ImageProfile}
              className="profile profile-img"
              alt=""
            />
          </div>
          <div className="ml-2">
            <h6 className="color-primary">{user.name + " " + user.surname}</h6>
            <h6 className="color-gray h7">{"@" + user.user} </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
