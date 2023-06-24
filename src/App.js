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
import UsersPage from "./pages/UsersPage/UsersPage";
import BasketBook from "./pages/BasketBook/BasketBook";
import AboutSite from "./pages/AboutSite/AboutSite";
import AuthorPage from "./pages/AuthorPage/AuthorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/reading_now" element={<ReadingNow />} />
        <Route path="/detailedpage" element={<DetailedBookPage />} />
        <Route path="/author" element={<AuthorPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/profile" element={<UsersPage />} />
      <Route path="/basket" element={<BasketBook />} />
      <Route path="/aboutsite" element={<AboutSite />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
