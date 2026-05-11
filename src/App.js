import { Routes, Route } from "react-router-dom";
import AuthFlow from "./AuthFlow";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthFlow role="student" />} />
      <Route path="/student" element={<AuthFlow role="student" />} />
      <Route path="/company" element={<AuthFlow role="company" />} />
    </Routes>
  );
}

export default App;