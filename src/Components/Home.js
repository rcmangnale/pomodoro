import { useEffect, useRef, useState } from "react";

export default function Home() {
  const inputSessionTime = 25;
  const inputBreakTime = 5;
  const strInputSessionTime =
    inputSessionTime < 10
      ? "0" + inputSessionTime + ":00"
      : inputSessionTime + ":00";
  const strInputBreakTime =
    inputBreakTime < 10 ? "0" + inputBreakTime + ":00" : inputBreakTime + ":00";
  const startButtonRef = useRef();
  const pauseButtonRef = useRef();
  const BreakButtonRef = useRef();
  const titleRef = useRef();
  const timeRef = useRef();
  const [timerId, setTimerId] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    pauseButtonRef.current.disabled = true;
    BreakButtonRef.current.disabled = true;
    const data = JSON.parse(sessionStorage.getItem("user"));
    setUserData(data.displayName);
  }, []);
  
  function formatTime(timeInSecond) {
    let min = Math.floor(timeInSecond / 60);
    let sec = timeInSecond % 60;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    const timeInString = min + ":" + sec;
    return timeInString;
  }
  function startTimer() {
    startButtonRef.current.disabled = true;
    pauseButtonRef.current.disabled = false;
    BreakButtonRef.current.disabled = false;
    const min = parseInt(timeRef.current.textContent.slice(0, 2));
    const sec = parseInt(timeRef.current.textContent.slice(3, 5));
    let timeInSecond = min * 60 + sec;
    const id = setInterval(() => {
      if (timeInSecond === 0) {
        clearInterval(id);
        if (titleRef.current.textContent === "Session Time") {
          titleRef.current.textContent = "Break Time";
          timeRef.current.textContent = strInputBreakTime;
          startTimer();
        } else {
          window.location.reload();
        }
      }
      timeRef.current.textContent = formatTime(timeInSecond);
      timeInSecond -= 1;
    }, 1000);
    setTimerId(id);
  }
  function pauseTimer() {
    clearInterval(timerId);
    startButtonRef.current.disabled = false;
    pauseButtonRef.current.disabled = true;
  }
  function BreakTimer() {
    clearInterval(timerId);
    if (titleRef.current.textContent === "Session Time")
      timeRef.current.textContent = strInputSessionTime;
    else timeRef.current.textContent = strInputBreakTime;
    startButtonRef.current.disabled = false;
    pauseButtonRef.current.disabled = true;
    BreakButtonRef.current.disabled = true;
  }
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="grid justify-center p-12 text-2xl">
          UserName- {userData}
        </div>
        <div className="flex justify-center p-16 border-2 border-black ">
          <div className="flex flex-col ">
            <div className="grid grid-cols-3 gap-5 pb-12">
              <button
                onClick={startTimer}
                className="px-4 py-2 font-bold text-white bg-green-600 border border-blue-700 rounded hover:bg-blue-700"
                ref={startButtonRef}
              >
                START
              </button>
              <button
                onClick={pauseTimer}
                className="px-4 py-2 font-bold text-white bg-green-600 border border-blue-700 rounded hover:bg-blue-700"
                ref={pauseButtonRef}
              >
                PAUSE
              </button>
              <button
                onClick={BreakTimer}
                className="px-4 py-2 font-bold text-white bg-green-600 border border-blue-700 rounded hover:bg-rose-600"
                ref={BreakButtonRef}
              >
                Short Break
              </button>
            </div>
            <div className="flex flex-col">
              <p
                ref={timeRef}
                className="flex justify-center font-extrabold text-blue-800 text-9xl"
              >
                {strInputSessionTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
