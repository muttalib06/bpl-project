import { Suspense, useState } from "react";
import AvailablePlayers from "./components/available/AvailablePlayers";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Spinner1 from "./components/spinner/Spinner1";
import Selected from "./components/selected/Selected";

const fetchPlayers = () => {
  return fetch("/players.json").then((res) => res.json());
};
const playersPromise = fetchPlayers();

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [available, setAvailable] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(2500000);
  const handleCoinIncrease = (coin) => {
    const addCoins = availableBalance + coin;
    setAvailableBalance(addCoins);
  };

  const handleSelectedPlayer = (player) => {
    const selectPlayers = [...selectedPlayer, player];
    if (selectedPlayer.length === 6) {
      alert("selected players already 6");
      return;
    }
    setSelectedPlayer(selectPlayers);
  };
  const removePlayer = (player) => {
    const filterPlayers = selectedPlayer.filter((p) => p.name !== player.name);
    setSelectedPlayer(filterPlayers);
  };

  const backBalance = (backPrice) => {
    const newAvailableBalance = availableBalance + backPrice;
    setAvailableBalance(newAvailableBalance);
  };

  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner handleCoinIncrease={handleCoinIncrease}></Banner>

      <div className="max-w-[80%] mx-auto flex justify-between items-center my-5">
        <h2 className="font-bold text-2xl">
          {available ? "Available Players" : "Selected Player (4/6)"}
        </h2>
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
            Selected <span> ({selectedPlayer.length}) </span>
          </button>
        </div>
      </div>

      {available === true ? (
        <Suspense fallback={<Spinner1></Spinner1>}>
          <AvailablePlayers
            selectedPlayer={selectedPlayer}
            handleSelectedPlayer={handleSelectedPlayer}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <Selected
          backBalance={backBalance}
          selectedPlayer={selectedPlayer}
          removePlayer={removePlayer}
        ></Selected>
      )}
    </>
  );
}

export default App;
