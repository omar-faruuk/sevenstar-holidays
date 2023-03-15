import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import IndiaTourist from "./Component/Requirement/IndiaTourist";
import IndiaMedical from "./Component/Requirement/IndiaMedical";
import IndiaDoubleEntry from "./Component/Requirement/IndiaDoubleEntry";
import IndiaBusiness from "./Component/Requirement/IndiaBusiness";
import IndiaStudent from "./Component/Requirement/IndiaStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/india/tourist" element={<IndiaTourist />} />
        <Route path="/india/medical" element={<IndiaMedical />} />
        <Route path="/india/doubleEntry" element={<IndiaDoubleEntry />} />
        <Route path="/india/business" element={<IndiaBusiness />} />
        <Route path="/india/student" element={<IndiaStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
