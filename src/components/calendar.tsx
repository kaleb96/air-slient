import { DatePicker, ConfigProvider } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useState, useEffect } from "react";
import { getLocaleData } from "../assets/utils/dayjsConfig";
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

  const disabledDate = (current: Dayjs) => {
    return current.isBefore(dayjs(), "day");
  };
  const { RangePicker } = DatePicker;

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 14,
          },
        }}
      >
        <RangePicker
          className="custom-range-picker"
          picker="date"
          defaultValue={[dayjs(), dayjs()]}
          allowClear={false}
          disabledDate={disabledDate}
          getPopupContainer={(trigger) => trigger.parentElement}
        />
      </ConfigProvider>
    </>
  );
}

export default MainCanlendar;
