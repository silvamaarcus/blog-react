//Link
import { Link } from "react-router-dom";

const Card = ({ content }) => {
  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb hidden">
          <Link to={"/post/" + content.id}>
            <img src={content.imageUrl} alt="" />
          </Link>
        </div>
        <div className="mx-2 my-2">
          <h6 className="uppercase color-gray">{content.date}</h6>
          <h6 className="color-primary uppercase">{content.category}</h6>
          <Link to={"/post" + content.id}>
            <h5 className="my-2">{content.title}</h5>
          </Link>
          <p className="mb-3">{content.resume}</p>
          <Link to={"/post" + content.id} className="link color-primary">
            Ler mais
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
