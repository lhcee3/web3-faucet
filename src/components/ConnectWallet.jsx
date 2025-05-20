import React, { useEffect } from "react";
import { WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router-dom";
import "../animated-bg.css"; // Keep only the animated background

const ConnectWallet = () => {
  const { connected } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (connected) {
      navigate("/airdrop");
    }
  }, [connected, navigate]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center pb-29">
      <div className="animated-bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>
      <div className="flex flex-col items-center justify-center z-10 max-w-md w-full">
        <h1 className="text-4xl font-bold text-[#85fd34] mb-6">Connect Your Wallet</h1>
        <div className="mb-6 text-gray-200 text-center max-w">
          <p>You’ll need a Solana-compatible wallet extension to use this app.</p>
          <p>
            Supported wallets include <span className="font-semibold text-white">Backpack</span>, <span className="font-semibold text-white">Phantom</span>, <span className="font-semibold text-white">Solflare</span>, <span className="font-semibold text-white">Glow</span>, and more.
          </p>
          <p>Please install and configure one of these wallets in your browser.</p>
        </div>
        <div className="flex gap-4 items-center justify-center mx-auto">
          <WalletMultiButton>
            Connect Wallet
          </WalletMultiButton>
          <WalletDisconnectButton>
            Disconnect Wallet
          </WalletDisconnectButton>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;