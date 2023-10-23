const Card = () => {
  return (
    <>
      <div className="grid-4 card p-0">
        <div className="thumb hidden">
          <a href="#">
            <img src="img/01.png" alt="" />
          </a>
        </div>
        <div className="mx-2 my-2">
          <h6 className="uppercase color-gray">01 nov 2021</h6>
          <h6 className="color-primary uppercase">tecnologia</h6>
          <a href="#">
            <h5 className="my-2">Os novos macbooks M1</h5>
          </a>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
            pharetra ut ac, pellentesque.
          </p>
          <a href="#" className="link color-primary">
            Ler mais
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
