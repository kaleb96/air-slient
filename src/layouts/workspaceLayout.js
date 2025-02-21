import Workspace from "../pages/Mypage.js";
import Header from "../components/header";
import Toolbar from "../components/toolbar";
import ToolbarModal from "../components/toolbarModal";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "../routes/index.js";

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
      {selectedOption !== "" ? (
        <ToolbarModal
          props={selectedOption}
          onSelectedOption={selectedToolbar}
        />
      ) : (
        <></>
      )}
      <Router>
        <Routes>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              element={<route.component props={selectedOption} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}
export default WorkspaceLayout;
