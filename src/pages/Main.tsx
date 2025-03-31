import { Carousel, ConfigProvider, Flex, Row } from "antd";
import ToolbarModal from "../components/toolbarModal";
import "../assets/main.css";
import ReserveInput from "../components/reserveInput";
import MainCanlendar from "../components/calendar";
import SelectInput from "../components/selectInput";
import SelectPersonnel from "../components/selectPersonnel";
import {
  mdiAccount,
  mdiBabyCarriage,
  mdiCalculator,
  mdiMagnify,
} from "@mdi/js";
import Icon from "@mdi/react";
import { useTranslation } from "react-i18next";
function Main({ props, onSelectedOption }) {
  const { t } = useTranslation(); // useTranslation 훅 사용
  const modalEffect = props !== "" ? true : false;

  const carouselList = [
    "/assets/carousel1.jpg",
    "/assets/carousel2.jpg",
    "/assets/carousel3.jpg",
  ];
  interface SelectBoxType {
    size: number;
    type: string;
    icon: string;
  }

  const adultSelectBox: SelectBoxType = {
    size: 24,
    type: "adult",
    icon: mdiAccount,
  };
  const childSelectBox: SelectBoxType = {
    size: 16,
    type: "child",
    icon: mdiAccount,
  };
  const infantSelectBox: SelectBoxType = {
    size: 24,
    type: "infant",
    icon: mdiBabyCarriage,
  };
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
        <div className="carousel-input">
          <Carousel arrows autoplay autoplaySpeed={5000}>
            {carouselList.map((img) => (
              <img src={img} height={650} />
            ))}
          </Carousel>
          <div className="carousel-buttons">
            <ReserveInput />
            <Row align={"middle"} className="input-containner">
              <Flex>
                <SelectInput />
                <MainCanlendar />
              </Flex>
              <Flex>
                <SelectPersonnel props={adultSelectBox} />
                <SelectPersonnel props={childSelectBox} />
                <SelectPersonnel props={infantSelectBox} />
                <Flex align="center">
                  <Flex className="common-button" align="center">
                    <Icon path={mdiCalculator} size={1} />
                    <span>{t("age_calculator")}</span>
                  </Flex>
                </Flex>
              </Flex>
              <Flex align="center" className="common-button search-flight">
                <Icon path={mdiMagnify} size={1} />
                <span>{t("search_flight")}</span>
              </Flex>
            </Row>
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default Main;
