import React, { useState, useEffect } from 'react';
const SetSocket = ({ setRoom,socket,setRoomNo,setTotalPlayer,player}) => {

// console.log("d",socket)
  
  const [roomId, setRoomId] = useState('');
  const [roomCreated, setRoomCreated] = useState(false);
  const [joinedRoom, setJoinedRoom] = useState(false);

  useEffect(() => {
    socket.on('roomCreated', (newRoomId) => {
      setRoomId(newRoomId);
      setRoomCreated(true);
      setRoomNo(newRoomId)
     
    });

    socket.on('joinedRoom', (roomId) => {
      setRoomId(roomId);
      setRoomNo(roomId)
      setJoinedRoom(true);
      
    });

    socket.on("total-players",(data)=>
    {
      if(data>=2)
     { setTotalPlayer(true)
    setRoom(true)
    }
    })
   


    socket.on('invalidRoom', () => {
      alert('Invalid room ID or room is full');
    });

    // return () => {
    //   socket.off('roomCreated');
    //   socket.off('joinedRoom');
    //   socket.off('invalidRoom');
    // };
  }, []);

  const createRoom = () => {
    socket.emit('createRoom');
  };

  const joinRoom = () => {
    socket.emit('joinRoom', roomId);
  };

  const enterRoom=()=>
  {
    socket.emit('total-players',roomId);
    setRoom(true);
  }

  return (
    <div className='min-h-screen w-screen flex justify-center items-center'>
    <div className="h-96 w-96 row-span-2 row-span-3 bg-gradient-to-br from-gray-900 to-purple-900 flex flex-col items-center justify-center text-white bg-gray-700  rounded-lg  max-w-md w-full">
      <h2 className="text-4xl font-bold mb-8">Room Selection</h2>
      {!roomCreated && !joinedRoom && (
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={createRoom}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            Create Room
          </button>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Enter Room ID"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="px-4 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button
              onClick={joinRoom}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >
              Join Room
            </button>
          </div>
        </div>
      )}
      {roomCreated && (
        <div><p className="text-2xl font-bold  m-10">
          Room created with ID: <span className="text-purple-400">{roomId}</span>
        </p>
        <button
              onClick={enterRoom}
              className="bg-purple-600 mt-12 ml-36 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
            >Enter The Game</button>
        </div>
        
      )}

      {!roomCreated && joinedRoom &&
      (
        <button
        onClick={enterRoom}
        className="bg-purple-600 mt-12 ml-2 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
      >Enter The Game</button>
      )}
      
    </div>
    </div>
  );
};

export default SetSocket;