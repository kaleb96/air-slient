import { Calendar, Flex, theme, Dropdown } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useState, useEffect } from "react";
import { getLocaleData } from "../assets/utils/dayjsConfig";
import Icon from "@mdi/react";
import { mdiCalendarMonth } from "@mdi/js";
import "../assets/calendar.css";

function MainCanlendar() {
  // NOTE: State
  const [selectedFromDate, setselectedFromDate] = useState("");
  const [selectedToDate, setselectedToDate] = useState("");

  // NOTE: Effect
  useEffect(() => {
    // Mount
    const localToday = getLocaleData(dayjs());
    setselectedFromDate(localToday);
    setselectedToDate(localToday);
  }, []);

  const { token } = theme.useToken();
  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  function getSelectedDate(date: Dayjs) {
    setselectedFromDate(getLocaleData(date));
  }

  return (
    <div style={wrapperStyle}>
      <Flex align="center">
        <div className="selected-date">
          <Flex align="center">
            <Icon path={mdiCalendarMonth} size={1} />
            {selectedFromDate}
          </Flex>
        </div>
        <span>~</span>
        <div className="selected-date">{selectedToDate}</div>
      </Flex>
      <Calendar
        fullscreen={false}
        onChange={getSelectedDate}
        defaultValue={dayjs()}
      />
    </div>
  );
}

export default MainCanlendar;
