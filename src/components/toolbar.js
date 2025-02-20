import { Segmented, Flex, ConfigProvider } from "antd";
import "../assets/toolbar.css";
function Toolbar({ onSelectedOption }) {
  // NOTE: Variables
  const imgSrc = "/assets/air_slient.jpg";
  const options = [
    "항공권 예약",
    "마이페이지",
    "서비스 안내",
    "이벤트",
    "로고샵/제휴상품",
  ];

  // NOTE: Functions
  function updateOpion(value) {
    onSelectedOption(value);
  }
  return (
    <Flex align="center" justify="center" className="toolbar">
      <img src={imgSrc} style={{ width: "200px", height: "80px" }} />
      <ConfigProvider
        theme={{
          token: {
            fontSize: "18px",
            boxShadowTertiary: "0",
            borderRadius: "0",
            controlPaddingHorizontal: 42,
          },
          components: {
            Segmented: {
              itemSelectedBg: "rgba(0,0,0,0.15)",
            },
          },
        }}
      >
        <Segmented
          options={options}
          size="large"
          className="segment"
          onChange={updateOpion}
        ></Segmented>
      </ConfigProvider>
    </Flex>
  );
}

export default Toolbar;
