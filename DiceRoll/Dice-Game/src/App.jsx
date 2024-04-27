import { Play } from "./components/play";
import { Signup } from "./components/signup";
import { Login } from "./components/login";
import SetSocket  from "./components/setSocket";
import React,{ useState, useEffect } from "react";
import { io } from 'socket.io-client';
const MemoizedPlay = React.memo(Play);

function App() {
  const [isReg, setReg] = useState(false);
  const [inRoom, setRoom] = useState(false);
  const [roomNo, setRoomNo] = useState('');
  const [isAuth, setAuth] = useState(false);
  const [socket, setSocket] = useState(null); // to use socket outside useeffect
  const[player,setTotalPlayer]=useState(false)
  useEffect(() => {
   
    const socketInstance = io('https://zanzibar-5.onrender.com');
    socketInstance.on("connect", () => {
      console.log("Connected to server");
    });
    setSocket(socketInstance); // Set the socket state);
    return () => {
      socketInstance.disconnect(); // Disconnect the socket when component unmounts
    };
  }, []);

  return (
    <div className="flex justify-between bg-[url('./assets/bg.png')] bg-cover bg-center">
      {isAuth ? (
        <>
          {inRoom && <MemoizedPlay players={3} setAuth={setAuth} socket={socket} roomNo={roomNo} player={player}/>}
          {!inRoom && <SetSocket setRoom={setRoom} socket={socket} setRoomNo={setRoomNo} setTotalPlayer={setTotalPlayer} player={player}/>}
        </>
      ) : (
        <div className="w-screen">
          {isReg && <Signup setAuth={setAuth} />}
          {!isReg && <Login setAuth={setAuth} setReg={setReg} />}
        </div>
      )}
    </div>
  );
}

export default App;
