import React from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { BackpackWalletAdapter } from "@solana/wallet-adapter-backpack";
import { useWallet } from "@solana/wallet-adapter-react";
import "@solana/wallet-adapter-react-ui/styles.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Airdrop from "./components/Airdrop";
import SignMessage from "./components/SignMessage";
import Navbar from "./components/Navbar";
import SendTokens from "./components/SendTokens";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer";
import ConnectWallet from "./components/ConnectWallet";

const wallets = [new BackpackWalletAdapter()];

const ProtectedRoute = ({ children }) => {
  const { connected } = useWallet();
  return connected ? children : <Navigate to="/connect" replace />;
};

const App = () => {
  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/rEnmxmf8us1FM5zrnasdjWz7jKPuYSbc"}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/connect" element={<ConnectWallet />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Airdrop />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/airdrop"
                element={
                  <ProtectedRoute>
                    <Airdrop />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signMessage"
                element={
                  <ProtectedRoute>
                    <SignMessage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/sendTokens"
                element={
                  <ProtectedRoute>
                    <SendTokens />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </Router>
          <ToastContainer position="top-right" autoClose={3000} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;


