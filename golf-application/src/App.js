import React, { useState } from "react";
import PlayerForm from "./components/PlayerForm";
import PlayerList from "./components/PlayerList";
import ScoreCard from "./components/ScoreCard";

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  const removePlayer = (id) => {
    setPlayers(players.filter((player) => player.id !== id));
  };

  return (
    <div>
      <h1>Golf Scorecard</h1>
      <PlayerForm addPlayer={addPlayer} />
      <PlayerList players={players} removePlayer={removePlayer} />
      <ScoreCard players={players} />
    </div>
  );
}

export default App;
