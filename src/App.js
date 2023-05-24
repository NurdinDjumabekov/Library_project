import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import Layout from "./components/HOC/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ReadingNow from "./pages/ReadingNow/ReadingNow";
import DetailedBookPage from "./pages/DetailedBookPage/DetailedBookPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/reading_now" element={<ReadingNow />} />
          <Route path="/detailedpage" element={<DetailedBookPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
