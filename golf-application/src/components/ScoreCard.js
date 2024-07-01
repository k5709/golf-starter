import React from "react";

function Scorecard({ players }) {
  return (
    <div>
      <h2>Scorecard</h2>
      {players.length === 0 ? (
        <p>No players to display</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Player</th>
              {[...Array(18)].map((_, index) => (
                <th key={index}>{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr key={player.id}>
                <td>{player.name}</td>
                {[...Array(18)].map((_, index) => (
                  <td key={index}>
                    <input type="number" min="1" max="10" defaultValue={0} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Scorecard;
