import React from "react";
import bannerImg from "../../assets/banner-main.png";

const Banner = ({ handleCoinIncrease }) => {
  return (
    <div className="max-w-[80%] mx-auto bg-[#131313] mt-6 text-white flex justify-center items-center flex-col space-y-5 py-5 rounded-xl bg-gradient-to-tr from-blue-300 via-[#131313] to-pink-300">
      <img src={bannerImg} alt="" />
      <h1 className="font-bold text-4xl">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="font-medium text-2xl text-gray-500">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="border-[#E7FE29] border rounded-xl py-2 px-2">
        {" "}
        <button
          onClick={() => handleCoinIncrease(500000)}
          className="btn border-[#E7FE29] bg-[#E7FE29] text-black  btn-outline"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
