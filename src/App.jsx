import { Suspense, useState } from "react";
import AvailablePlayers from "./components/available/AvailablePlayers";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Spinner1 from "./components/spinner/Spinner1";
import Selected from "./components/selected/Selected";

const fetchPlayers = () => {
  return fetch("/players.json").then((res) => res.json());
};

function App() {
  const [available, setAvailable] = useState(true);
  const [coins, setCoins] = useState(0);
  const handleCoinIncrease = (coin) => {
    const addCoins = coins + coin;
    setCoins(addCoins);
  };
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Banner handleCoinIncrease={handleCoinIncrease}></Banner>

      <div className="max-w-[80%] mx-auto flex justify-between items-center my-5">
        <h2 className="font-bold text-2xl">Available Players</h2>
        <div>
          <button
            onClick={() => setAvailable(true)}
            className={`btn border-r-0 rounded-r-0 rounded-y-0 rounded-l-2xl ${
              available === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setAvailable(false)}
            className={`btn border-l-0 rounded-l-0 rounded-y-0  rounded-r-2xl ${
              available === false ? "bg-[#E7FE29]" : " "
            }`}
          >
            Selected <span> (0) </span>
          </button>
        </div>
      </div>

      {available === true ? (
        <Suspense fallback={<Spinner1></Spinner1>}>
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <Selected></Selected>
      )}
    </>
  );
}

export default App;
