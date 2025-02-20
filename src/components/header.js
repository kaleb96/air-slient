import "../assets/header.css";
import Icon from "@mdi/react";
import { ConfigProvider, Flex, Select } from "antd";
import { useState } from "react";
import { mdiWeb, mdiAccount, mdiBriefcaseAccount, mdiAirplane } from "@mdi/js";

const { Option } = Select;
function Header() {
  const [selectedOption, setSelectedOption] = useState("개인");

  const options = [
    { value: "peronal", label: "개인", icon: mdiAccount },
    { value: "enterprise", label: "기업", icon: mdiBriefcaseAccount },
    { value: "travel agency", label: "여행사", icon: mdiAirplane },
  ];
  const langs = [
    { value: "korean", label: "한국어" },
    { value: "english", label: "ENGLISH" },
    { value: "japanese", label: "日本語" },
    { value: "chinese", label: "请用中文" },
  ];

  // NOTE: Functions
  function updateOption(value) {
    setSelectedOption(value);
  }

  return (
    <div>
      <Flex justify="center" className="header">
        <Flex gap="large" align="center">
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 0,
              },
              components: {
                Select: {
                  colorBgElevated: "#015fa9",
                  colorText: "black",
                },
              },
            }}
          >
            <Select
              className="select-option"
              value={selectedOption}
              onChange={updateOption}
            >
              {options.map((option) => (
                <Option key={option.value} value={option.value}>
                  <div className="option">
                    <Icon path={option.icon} size={1} />
                    {option.label}
                  </div>
                </Option>
              ))}
            </Select>
          </ConfigProvider>
          <Flex className="header-toolbar">
            <span>로그인</span>
            <span>|</span>
            <span>회원가입</span>
            <span>|</span>
            <span>고객센터</span>
            <span>|</span>
            <span>사이트맵 </span>
          </Flex>
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 0,
                colorTextPlaceholder: "white",
                colorText: "black",
              },
              components: {
                Select: {
                  selectorBg: "#015fa9",
                  colorBgElevated: "#f8f8f8",
                },
              },
            }}
          >
            <Flex align="center">
              <Icon
                path={mdiWeb}
                size={1}
                style={{ marginRight: "8px", color: "white" }}
              />
              <Select
                className="select-lang"
                placeholder="한국어"
                options={langs}
              />
            </Flex>
          </ConfigProvider>
        </Flex>
      </Flex>
    </div>
  );
}

export default Header;
