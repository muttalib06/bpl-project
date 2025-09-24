import React from "react";
import SelectedPlayer from "./SelectedPlayer";
import Player from "../available/Player";

const Selected = ({ selectedPlayer,removePlayer,backBalance }) => {
  return (
    <div className="max-w-[80%] mx-auto space-y-4">
      {selectedPlayer.map((player) => (
        <SelectedPlayer
          key={player.id}
          player={player}
          removePlayer={removePlayer}
          backBalance = {backBalance}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default Selected;
