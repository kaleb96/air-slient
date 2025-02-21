import { Flex, Card, ConfigProvider } from "antd";
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

  function onMouseEnterToolbar(value) {
    const el = value.target;
    onSelectedOption(el.textContent);
  }

  return (
    <Flex align="center" justify="center" className="toolbar">
      <img src={imgSrc} style={{ width: "200px", height: "80px" }} />
      <ConfigProvider
        theme={{
          token: {
            lineType: 0,
          },
        }}
      >
        <Card>
          {options.map((option) => (
            <>
              <span
                className="toolbar-title"
                onMouseEnter={onMouseEnterToolbar}
              >
                {option}
              </span>
            </>
          ))}
        </Card>
      </ConfigProvider>
    </Flex>
  );
}

export default Toolbar;
