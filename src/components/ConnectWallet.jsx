import React, { useEffect } from "react";
import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router-dom";
import "../wallet-override.css";
import "../animated-bg.css";

const ConnectWallet = () => {
  const { connected } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (connected) {
      navigate("/airdrop");
    }
  }, [connected, navigate]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="animated-bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <div className="flex flex-col items-center justify-center z-10 max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#85fd34] mb-6">Connect Your Wallet</h1>
        <p className="mb-4 text-gray-100 text-center max-w">
          You’ll need a Solana-compatible wallet extension to use this app.<br />
          Supported wallets include <span className="text-white font-semibold">Backpack</span>, <span className="text-white font-semibold">Phantom</span>, <span className="text-white font-semibold">Solflare</span>, <span className="text-white font-semibold">Glow</span>, and more.<br />
          Please install and configure one of these wallets in your browser.
        </p>
        <div className="flex gap-4 w-full max-w-xs justify-center">
          <WalletMultiButton className="border-2 border-[#85fd34] text-[#85fd34] bg-transparent hover:bg-[#85fd34] hover:text-white transition px-4 py-2 rounded">
            Connect Wallet
          </WalletMultiButton>
          <WalletDisconnectButton className="border-2 border-[#85fd34] text-[#85fd34] bg-transparent hover:bg-[#85fd34] hover:text-white transition px-4 py-2 rounded">
            Disconnect Wallet
          </WalletDisconnectButton>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;