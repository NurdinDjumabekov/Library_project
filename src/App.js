import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import Layout from "./components/HOC/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import ReadingNow from "./pages/ReadingNow/ReadingNow";
import UsersPage from "./pages/UsersPage/UsersPage";
import AboutSite from "./pages/AboutSite/AboutSite";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import ReaderPage from "./pages/ReaderPage/ReaderPage";
import SettingsUsersPage from "./pages/SettingsUsersPage/SettingsUsersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/reading_now" element={<ReadingNow />} />
        <Route path="/profile">
          <Route index element={<UsersPage/>}/>
          <Route path="edit" element={<SettingsUsersPage/>}/>
        </Route>
        <Route path="/detailed" element={<DetailedPage />} />
        <Route path="/reader" element={<ReaderPage/>}/>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/aboutsite" element={<AboutSite />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
