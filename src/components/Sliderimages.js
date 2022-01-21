import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src="./assets/cinema2.jfif"
            alt="cinema"
          />
          <Carousel.Caption>
            <h3>Book My Show</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./assets/movie2.jfif"
            alt="theatre"
          />

          <Carousel.Caption>
            <h3>Book My Show</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./assets/festival2.jfif" alt="festival" />

          <Carousel.Caption>
            <h3>Book My Show</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
