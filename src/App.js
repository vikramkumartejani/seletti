import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Invest from "./pages/Invest";
import Referrals from "./pages/Referrals";
import MobileSideBar from "./pages/components/Sidebar/MobileSideBar";

function App() {
  return (
    <BrowserRouter>
    <MobileSideBar/>
      <Routes>
        <Route path="/" element={<Invest />} />
        <Route path="/referrals" element={<Referrals />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
