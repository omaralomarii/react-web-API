import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000} style={{ height: "55vh" }}>
        <img
          className="d-block w-100 "
          src="https://wallpaperaccess.com/full/4839666.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{ height: "55vh" }}>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/3658600.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p>.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "55vh" }}>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/3658975.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
