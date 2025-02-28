import { BrowserRouter, Route, Routes } from "react-router-dom";
import Entry from "./pages/Entry";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
