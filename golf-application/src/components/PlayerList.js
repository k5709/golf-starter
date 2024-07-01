import React from "react";

function PlayerList({ players, removePlayer }) {
  return (
    <div>
      <h2>Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            {player.name} (Handicap: {player.handicap})
            <button onClick={() => removePlayer(player.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
