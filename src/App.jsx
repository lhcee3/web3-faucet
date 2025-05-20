import React from "react";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Airdrop from "./components/Airdrop";
import SignMessage from "./components/SignMessage";
import Navbar from "./components/Navbar";
import SendTokens from "./components/SendTokens";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";

const App = () => {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/rEnmxmf8us1FM5zrnasdjWz7jKPuYSbc"}>
      <WalletModalProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Airdrop />} />
            <Route path="/airdrop" element={<Airdrop />} />
            <Route path="/signMessage" element={<SignMessage />} />
            <Route path="/sendTokens" element={<SendTokens />} />
          </Routes>
          <Footer />
        </Router>
        <ToastContainer position="top-right" autoClose={3000} />
      </WalletModalProvider>
    </ConnectionProvider>
  );
};

export default App;


