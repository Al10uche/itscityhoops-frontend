import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageContainer from "./Layouts/PageContainer";
import "react-datepicker/dist/react-datepicker.css";

import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import MerchPage from "./pages/Merch.page";
import LookForGames from "./pages/LookForGames.page";
import LoginPage from "./pages/Login.page";
import RegisterPage from "./pages/Register.page";
import PlayNowPage from "./pages/PlayNow.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<LookForGames />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/merch" element={<MerchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/play" element={<PlayNowPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
