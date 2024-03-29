//import './PhotoCarousel.css';

function PhotoCarousel(){
  return(
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade w-50 text-center" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      <div className="carousel-inner">
        {/* < className="carousel-inner rounded-circle"> */}
          <div className="carousel-item active">
            <img src="./photo/GubkaBob.jpg" className="d-block w-100" alt="GubkaBob"></img>
          </div>
          <div className="carousel-item">
            <img src="./photo/CatFun.png" className="d-block w-100" alt="CatFun"></img>
          </div>
          <div className="carousel-item">
            <img src="./photo/work.jpg" className="d-block w-100" alt="work"></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Prev</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
}
export default PhotoCarousel;