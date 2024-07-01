import React, { useState } from "react";

function PlayerForm({ addPlayer }) {
  const [name, setName] = useState("");
  const [handicap, setHandicap] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !handicap) return;
    addPlayer({ id: Date.now(), name, handicap });
    setName("");
    setHandicap("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Handicap"
        value={handicap}
        onChange={(e) => setHandicap(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  );
}

export default PlayerForm;
