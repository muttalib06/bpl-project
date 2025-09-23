import React, { use } from "react";
import Player from "./Player";

const AvailablePlayers = ({ playersPromise }) => {
  const players = use(playersPromise);
  console.log(players);

  return (
      <div className="max-w-[80%] mx-auto mt-10 grid grid-cols-3 gap-3">
        {players.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
  );
};

export default AvailablePlayers;
