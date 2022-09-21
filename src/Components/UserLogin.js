import { useNavigate } from "react-router-dom";
import { Auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ReactComponent as Googleicon } from "./Google.svg";

function App() {
  const navigate = useNavigate();
  function UserLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(Auth, provider)
      .then((re) => {
        sessionStorage.setItem("user", JSON.stringify(re.user));
        navigate("/Home");
      })
      .catch((rj) => console.log(rj));
  }
  return (
    <>
      <div className="grid gap-5 p-12 border-2 border-black rounded-2xl grid-rows ">
        <img
          src="https://miro.medium.com/max/810/1*kEwlYMyiFobrgWH7BvdSSA.png"
          className="h-48 w-96 "
          alt="pomodoroImg"
        ></img>
        <button
          className="flex justify-center gap-4 px-4 py-4 text-3xl font-bold text-black bg-white border border-blue-700 rounded hover:text-white w-96 hover:bg-blue-700"
          onClick={UserLogin}
        >
          {" "}
          <Googleicon height="42px" width="42px" />
          Sign in with Google
        </button>
      </div>
    </>
  );
}

export default App;
