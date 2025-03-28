import { Card, Flex, Row } from "antd";
import { useTranslation } from "react-i18next";
import {
  mdiAirplaneTakeoff,
  mdiAirplaneLanding,
  mdiChevronDown,
} from "@mdi/js";
import Icon from "@mdi/react";
import "../assets/selectInput.css";
function SelectInput() {
  const { t } = useTranslation(); // useTranslation 훅 사용
  return (
    <div>
      <Flex align="center">
        <div className="select-box">
          <Row
            align={"middle"}
            style={{ width: "100%" }}
            justify={"space-between"}
          >
            <div>
              <Icon
                path={mdiAirplaneTakeoff}
                size={1}
                className="select-icon"
              />
              <span style={{ paddingLeft: "8px" }}>{t("busan")}</span>
            </div>
            <Icon
              path={mdiChevronDown}
              size={1}
              className="select-icon arrow-bottom"
            />
          </Row>
        </div>
        <div className="select-box">
          <Row
            align={"middle"}
            style={{ width: "100%" }}
            justify={"space-between"}
          >
            <div>
              <Icon
                path={mdiAirplaneLanding}
                size={1}
                className="select-icon"
              />
              <span style={{ paddingLeft: "8px" }}>{t("seoul_gmp")}</span>
            </div>
            <Icon
              path={mdiChevronDown}
              size={1}
              className="select-icon arrow-bottom"
            />
          </Row>
        </div>
        {/* <Card>
          <p>{t("korea")}</p>
        </Card> */}
      </Flex>
    </div>
  );
}

export default SelectInput;
