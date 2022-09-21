

import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import UserLogin from "./Components/UserLogin";

function App() {
  return (
    <>
    <div className=" h-36">
    <p className="flex justify-center p-12 text-3xl font-bold text-black bg-sky-500 ">Build a Home timer app</p>
    </div>
    <div className="flex justify-center ">
    <Routes>
        <Route path="/*" element={<UserLogin/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
