import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchProfile from "./pages/SearchProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/searchProfile" element={<SearchProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
