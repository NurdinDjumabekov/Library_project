import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import Layout from "./components/HOC/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import ReadNow from "./components/ReadNow/ReadNow";

function App() {
  const dispatch = useDispatch();
  const { start } = useSelector((state) => state.sendRequestSlice);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/readNow" element={<ReadNow/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
