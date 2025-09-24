import React from "react";
import logo from "../../assets/logo.png"
import coin  from "../../assets/coin.png";

const Navbar = ({availableBalance}) => {
  return (
    <div className="navbar bg-base-100 max-w-[80%] mx-auto mt-5 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex items-center justify-between gap-15">
        <ul className="flex justify-around items-center gap-5 text-[#13131370]font-semibold">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Fixture</a>
          </li>
          <li>
            <a href="">Teams</a>
          </li>
          <li>
            <a href="">Schedules</a>
          </li>
        </ul>
        <div className="flex items-center gap-2 border border-[#13131310] py-1 px-3 rounded-lg shadow">
          <p className="font-bold"><span className="font-bold">{availableBalance}</span> Coin</p>
          <img className="w-[20px] h-[20px]" src={coin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
