import { Carousel, ConfigProvider } from "antd";

function Main({ props }) {
  const modalEffect = props !== "" ? true : false;

  const carouselList = [
    "/assets/carousel1.jpg",
    "/assets/carousel2.jpg",
    "/assets/carousel3.jpg",
  ];
  return (
    <div
      style={{
        backgroundColor: modalEffect ? "grey" : "",
        height: modalEffect ? "100vh" : "",
        opacity: modalEffect ? "0.9" : "",
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            fontSize: 24,
          },
          components: {
            Carousel: {
              arrowSize: 100,
              arrowOffset: 180,
            },
          },
        }}
      >
        <Carousel arrows autoplay autoplaySpeed={5000}>
          {carouselList.map((img) => (
            <img src={img} height={650} />
          ))}
        </Carousel>
      </ConfigProvider>
    </div>
  );
}

export default Main;
