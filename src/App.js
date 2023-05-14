import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeStart } from "./store/reducers/sendRequestSlice";
import ForMobile from "./components/ForMobile/ForMobile";

function App() {
  const dispatch = useDispatch();
  const { start } = useSelector((state) => state.sendRequestSlice);
  return <div>
    <ForMobile/>
  </div>;
}

export default App;
