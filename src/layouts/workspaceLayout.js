import Workspace from "../pages/workspace";
import Header from "../components/header";
import Toolbar from "../components/toolbar";
import ToolbarModal from "../components/toolbarModal";
import { useState } from "react";
function WorkspaceLayout() {
  const [selectedOption, setSelectedOption] = useState("");
  // NOTE: Functions
  function selectedToolbar(value) {
    console.log("toolbar = ", value);
    setSelectedOption(value);
  }
  return (
    <div>
      <Header />
      <Toolbar onSelectedOption={selectedToolbar} />
      {selectedOption !== "" ? <ToolbarModal props={selectedOption} /> : null}
      <Workspace />
    </div>
  );
}
export default WorkspaceLayout;
