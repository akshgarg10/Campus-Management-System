import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import Student from "./pages/Student";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Home /> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="student" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
