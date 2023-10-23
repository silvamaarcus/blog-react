// Hooks
import { useState, useEffect } from "react";
// API
import api from "../../../services/api";

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
      <div className="bb-black py-4">
        <div>
          <h6 className="uppercase color-gray">{content.date}</h6>
          <h6 className="uppercase color-primary">{content.category}</h6>
          <h5 className="mt-3">{content.title}</h5>
          <p className="mt-1">{content.resume}</p>
        </div>

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
