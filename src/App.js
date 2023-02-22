import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PlayerDisplay from "./components/PlayerDisplay";
import GameInterface from "./components/GameInterface";
import "./styles/App.scss";

function App() {
  const [playerList, setplayerList] = useState([]);

  const handlePlyareList = (playerList) => {
    setplayerList(playerList);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PlayerDisplay
              playerList={playerList}
              handlePlayerList={handlePlyareList}
            />
          }
        />
        <Route path="/game" element={<GameInterface playerList={playerList}/>} />
      </Routes>
    </div>
  );
}

export default App;
