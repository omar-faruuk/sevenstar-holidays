import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import IndiaTourist from "./Component/Requirement/IndiaTourist";
import IndiaMedical from "./Component/Requirement/IndiaMedical";
import IndiaDoubleEntry from "./Component/Requirement/IndiaDoubleEntry";
import IndiaBusiness from "./Component/Requirement/IndiaBusiness";
import IndiaStudent from "./Component/Requirement/IndiaStudent";
import Error from "./Component/Error/Error";
import Thailand from "./Component/Requirement/Thailand";
import Malaysia from "./Component/Requirement/Malaysia";
import Singapore from "./Component/Requirement/Singapore";
import Usa from "./Component/Requirement/Usa";
import Dubai from "./Component/Requirement/Dubai";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/india/tourist" element={<IndiaTourist />} />
        <Route path="/india/medical" element={<IndiaMedical />} />
        <Route path="/india/doubleEntry" element={<IndiaDoubleEntry />} />
        <Route path="/india/business" element={<IndiaBusiness />} />
        <Route path="/india/student" element={<IndiaStudent />} />
        <Route path="/thailand/*" element={<Thailand />} />
        <Route path="/malaysia/*" element={<Malaysia />} />
        <Route path="/singapore/*" element={<Singapore />} />
        <Route path="/usa/*" element={<Usa />} />
        <Route path="/dubai/*" element={<Dubai />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
