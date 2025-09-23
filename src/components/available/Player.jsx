import React from "react";
import nameIcon from "../../assets/user 1.png";
import flagIcon from "../../assets/Group.png";

const Player = ({ player }) => {
  console.log(player);
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-4">
      <figure>
        <img src={player.img} className="w-full" />
      </figure>
      <div className="p-2 space-y-2 border-b-1 border-gray-300">
        <div className="flex items-center gap-2">
          <img src={nameIcon} alt="" />
          <h3 className="font-bold text-xl">{player.name}</h3>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img src={flagIcon} alt="" />
            <p>{player.country}</p>
          </div>
          <button className="btn">All rounder</button>
        </div>
      </div>
      <div className="p-2 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Rating</h3>
          <p>{player.rating}</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Role</h3>
          <p>{player.role}</p>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="font-bold">Price:{player.price} </h3>
          <button className="btn">Choose Player</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
