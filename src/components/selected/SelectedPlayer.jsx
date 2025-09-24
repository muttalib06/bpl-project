import React from "react";
import deleteImg from "../../assets/Frame.png";

const SelectedPlayer = ({ player, removePlayer,backBalance }) => {
  const deletePlayer = (playerData) => {
    removePlayer(playerData);
  };
  return (
    <div className="navbar bg-base-100 shadow-sm flex justify-between items-center rounded-lg">
      <div className="flex items-center gap-4">
        <img className="w-20 h-20 rounded-2xl" src={player.img} alt="" />
        <div>
          <h3 className="font-bold text-xl">{player.name}</h3>
          <p>{player.role}</p>
        </div>
      </div>
      <div>
        <button onClick={() => {
                deletePlayer(player)
                backBalance(player.price)
                
        }}>
          <img src={deleteImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayer;
