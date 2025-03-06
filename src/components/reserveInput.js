import { Button, ConfigProvider, Flex, Input } from "antd";
import "../assets/reserveInput.css";
import Icon from "@mdi/react";
import {} from "@mdi/js";

function ReserveInput() {
  const reserveType = ["일반예약", "스탬프예약", "국내선 단체예약"];
  const travelType = ["왕복", "편도", "자유여정"];
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            controlHeight: 55,
          },
          components: {
            Button: {
              contentFontSizeSM: 14,
              fontWeight: 650,
              defaultBg: "#1e409a",
              defaultColor: "#ffffff",
            },
          },
        }}
      >
        <Flex>
          {reserveType.map((type, idx) =>
            idx < 2 ? (
              <Button key={type} size="small" className="type-button">
                {type}
              </Button>
            ) : (
              <Button key={type} size="small" style={{ width: "120px" }}>
                {type}
              </Button>
            )
          )}
        </Flex>
        <Flex>
          {travelType.map((type) => (
            <Button key={type} size="small" className="type-button">
              {type}
            </Button>
          ))}
        </Flex>
        <Flex>
          <Input>
            <Icon path={mdilChevronDown} />
          </Input>
        </Flex>
      </ConfigProvider>
    </>
  );
}

export default ReserveInput;
