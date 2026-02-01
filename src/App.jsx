import Container from "./pages/Container";
import { Routes, Route } from "react-router-dom";
import MoreProjects from "./pages/MoreProjects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <Routes>
          <Route path="/" element={<Container />}></Route>
          <Route path="/more-projects" element={<MoreProjects />}></Route>
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
