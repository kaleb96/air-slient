import { modalData } from "../assets/toolbarModalData.ts";
import { Card, Flex, Divider, ConfigProvider } from "antd";
import "../assets/toolbarModal.css";

function ToolbarModal({ props, onSelectedOption }) {
  if (!props) {
    return;
  }
  const modal = modalData[props];

  function onMounseLeaveModal(value) {
    onSelectedOption("");
  }
  return (
    <div onMouseLeave={onMounseLeaveModal}>
      <ConfigProvider
        theme={{
          token: {
            lineType: 0,
            borderRadius: 0,
          },
        }}
      >
        <Card>
          <Flex justify="center" gap={20} className="toolbar-box">
            {modal.map((data, idx) => (
              <>
                <div key={{ idx }}>
                  {data.map((item, subIdx) => (
                    <>
                      <Flex align="space-between">
                        {subIdx === 0 ? (
                          <b className="item item-bold">{item}</b>
                        ) : (
                          <span className="item">{item}</span>
                        )}
                      </Flex>
                    </>
                  ))}
                </div>
                {modal.length - 1 === idx ? (
                  <></>
                ) : (
                  <Divider className="divider" type="vertical" />
                )}
              </>
            ))}
          </Flex>
        </Card>
      </ConfigProvider>
    </div>
  );
}

export default ToolbarModal;
