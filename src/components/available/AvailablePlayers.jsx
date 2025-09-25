import React, { use } from "react";
import Player from "./Player";

const AvailablePlayers = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  handleSelectedPlayer,
  selectedPlayer
}) => {
  const players = use(playersPromise);

  return (
    <div className="max-w-[80%] mx-auto mt-10 grid grid-cols-3 gap-3">
      {players.map((player) => (
        <Player
          key={player.id}
          selectedPlayer={selectedPlayer}
          handleSelectedPlayer={handleSelectedPlayer}
          availableBalance={availableBalance}
          player={player}
          setAvailableBalance={setAvailableBalance}
        ></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
