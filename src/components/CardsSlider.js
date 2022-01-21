import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardsSlider() {
  return (
    <div style={{ marginBottom: "1%", background: "light-blue", padding: "5%", borderRadius: "2%" }}>
      <Carousel variant="dark" indicators={false}>
        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "50px",
              justifyContent: "space-around",
              marginLeft: "2%",
              marginRight: "2%"
            }}
          >
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/adventure.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Adventure n Fun</Card.Title>
                <Card.Text>10 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/music.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Music Shows</Card.Title>
                <Card.Text>50 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/eGames.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Video Games</Card.Title>
                <Card.Text>10 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/photography.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Photography</Card.Title>
                <Card.Text>4 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/art.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Art n Craft</Card.Title>
                <Card.Text>5 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "50px",
              justifyContent: "space-around",
              marginLeft: "2%",
              marginRight: "2%"
            }}
          >
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/art.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Art n Craft</Card.Title>
                <Card.Text>5 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/fitness.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Fitness</Card.Title>
                <Card.Text>110 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/jump.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Meditation</Card.Title>
                <Card.Text>8 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/guitar.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Instruments</Card.Title>
                <Card.Text>12 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/diet.jfif"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Healthy Diet</Card.Title>
                <Card.Text>3 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup
            style={{
              display: "flex",
              gap: "50px",
              justifyContent: "space-around",
              marginLeft: "2%",
              marginRight: "2%"
            }}
          >
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/diet.jfif"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Healthy Diet</Card.Title>
                <Card.Text>3 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/games.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Games</Card.Title>
                <Card.Text>10 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "100px" }}
            >
              <Card.Img
                src="./assets/upskill.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Upskill</Card.Title>
                <Card.Text>7 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/kids.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Kids Zone</Card.Title>
                <Card.Text>50 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
            <Card
              className="bg-light text-dark"
              style={{ height: "300px", width: "250px" }}
            >
              <Card.Img
                src="./assets/adventure.jpg"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <Card.Title>Adventure n Fun</Card.Title>
                <Card.Text>10 events</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CardsSlider;
