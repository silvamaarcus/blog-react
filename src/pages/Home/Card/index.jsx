const Card = ({ content }) => {
  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb hidden">
          <a href="#">
            <img src={content.imageUrl} alt="" />
          </a>
        </div>
        <div className="mx-2 my-2">
          <h6 className="uppercase color-gray">{content.date}</h6>
          <h6 className="color-primary uppercase">{content.category}</h6>
          <a href="#">
            <h5 className="my-2">{content.title}</h5>
          </a>
          <p className="mb-3">{content.resume}</p>
          <a href="#" className="link color-primary">
            Ler mais
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
