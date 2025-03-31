import { Flex, Row } from "antd";
import { useState, useEffect, useRef } from "react";
import Icon from "@mdi/react";
import { mdiChevronUp, mdiChevronDown } from "@mdi/js";
import "../assets/css/selectPersonnel.css";
import { useTranslation } from "react-i18next";

function SelectPersonnel({ props }) {
  const { t } = useTranslation(); // useTranslation 훅 사용

  // NOTE: State
  const [selectedPersonnel, setSelectedPersonnel] = useState(0);
  const [activeUpBorder, setActiveUpBorder] = useState(false);
  const [activeDownBorder, setActiveDownBorder] = useState(false);

  // NOTE: ref
  const arrowUpRef = useRef<HTMLElement>(null);
  const arrowDownRef = useRef<HTMLElement>(null);

  // NOTE: functions
  function handleUpEvent(event: any) {
    // Border 초기화
    setActiveUpBorder(false);
    setActiveDownBorder(false);
    // Event bubling 방지
    event.stopPropagation();

    // Border 적용
    if (
      arrowUpRef.current &&
      arrowUpRef.current.contains(event.target as Node)
    ) {
      setSelectedPersonnel((prev) => prev + 1);
      setActiveUpBorder(true);
    }
  }

  function handleDownEvent(event: any) {
    // Border 초기화
    setActiveUpBorder(false);
    setActiveDownBorder(false);
    // Event bubling 방지
    event.stopPropagation();

    // Border 적용
    if (
      arrowDownRef.current &&
      arrowDownRef.current.contains(event.target as Node)
    ) {
      if (selectedPersonnel > 0) {
        setSelectedPersonnel((prev) => prev - 1);
      }
      setActiveDownBorder(true);
    }
  }
  // NOTE: effect
  useEffect(() => {
    document.addEventListener("click", handleUpEvent);
    document.addEventListener("click", handleDownEvent);
    return () => {
      document.addEventListener("click", handleUpEvent);
      document.removeEventListener("click", handleDownEvent);
    };
  }, []);
  return (
    <div className="select-personnel-container">
      <Row align={"middle"} justify="space-between" style={{ width: "100%" }}>
        <Icon
          path={props.icon}
          style={{ height: `${props.size}` }}
          className="personnel-icon"
        />
        <span className="personnel-text">{t(`personnel_${props.type}`)}</span>
        <span className="personnel-text">{selectedPersonnel}</span>
        <Flex vertical align="center">
          <Flex
            className="arrow-container"
            onClick={handleUpEvent}
            ref={arrowUpRef}
            style={{
              border: activeUpBorder ? "2px solid #D0F9FF" : "",
            }}
          >
            <Icon path={mdiChevronUp} className="arrow-function" />
          </Flex>
          <Flex
            className="arrow-container"
            onClick={handleDownEvent}
            ref={arrowDownRef}
            style={{
              border: activeDownBorder ? "2px solid #D0F9FF" : "",
            }}
          >
            <Icon path={mdiChevronDown} className="arrow-function" />
          </Flex>
        </Flex>
      </Row>
    </div>
  );
}
export default SelectPersonnel;
