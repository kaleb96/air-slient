import { Carousel, ConfigProvider } from "antd";
import ToolbarModal from "../components/toolbarModal";
import "../assets/main.css";
import ReserveInput from "../components/reserveInput";

function Main({ props, onSelectedOption }) {
  const modalEffect = props !== "" ? true : false;

  const carouselList = [
    "/assets/carousel1.jpg",
    "/assets/carousel2.jpg",
    "/assets/carousel3.jpg",
  ];

  function selectedToolbar(value) {
    onSelectedOption(value);
  }
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
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
        <div className="toolbar-modal">
          <ToolbarModal props={props} onSelectedOption={selectedToolbar} />
        </div>
        <Carousel arrows autoplay autoplaySpeed={5000}>
          {carouselList.map((img) => (
            <img src={img} height={650} />
          ))}
        </Carousel>
        <ReserveInput />
      </ConfigProvider>
    </div>
  );
}

export default Main;
