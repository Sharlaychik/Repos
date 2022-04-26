import './Carousel.css';

function Carousel(){
    return (
        <div className="row">

            <div className="col-md-4">    
            <div className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://moe-online.ru/media_new/7/7/2/7/6/4/material_1034575/original_photo-thumb_1920.jpg"
                        className="d-block w-100" ></img>
                    </div>
                    <div className="carousel-item"  data-bs-interval="10000">
                        <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/46/2018/01/lucina-960x540.jpg"
                        className="d-block w-100"></img>
                    </div>  
                    <div className="carousel-item"  data-bs-interval="10000">
                        <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/A8BB/production/_113959134_promo_1.png"
                        className="d-block w-100"></img>
                    </div>
                </div>
                </div>
                </div>
            <div className="col-md-8">
            

        </div>
        </div>
        
    );
}
export default Carousel;