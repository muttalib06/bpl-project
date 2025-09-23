import { Suspense } from "react";
import AvailablePlayers from "./components/available/AvailablePlayers";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";

const fetchPlayers = () => {
  return fetch("/players.json").then((res) => res.json());
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense
        fallback={
          <span className="loading loading-spinner text-warning"></span>
        }
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
    </>
  );
}

export default App;
