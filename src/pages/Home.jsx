import { useContext } from "react";
import { CryptoContext } from "../content/CryptoContext";
import Navbar from "../components/Navbar";
import CoinArea from "../components/CoinArea";
import Footer from "../components/Footer";

const Home = () => {
  const { filteredCryptos } = useContext(CryptoContext);

  return (
    <>
      <Navbar />
      <CoinArea />
      <Footer/>
    </>
  );
};

export default Home