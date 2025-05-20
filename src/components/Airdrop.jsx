import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";
import GetBalance from "./Getbalance";
import { useState } from "react";
import { toast } from "react-toastify";

// The useWallet hooks allows to use the wallets variable inside the airdrop components.
function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(null);

  async function sendAirdropToUser() {
    if (!wallet.publicKey) {
      toast("Connect your wallet first.");
      return;
    }

    try {
      const amount = document.getElementById("publicKey").value;
      await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
      toast(`${amount} sol has been airdropped to your wallet`);
    } catch (error) {
      console.log("Airdrop failed", error);
      toast("Airdrop Failed");
    }
  }

  return (
    <div className="  w-full">
      <div className="flex  gap-2 w-full justify-end p-3 ">
        <WalletMultiButton></WalletMultiButton>
        <WalletDisconnectButton></WalletDisconnectButton>
      </div>
      <div className="flex flex-col justify-center w-full h-[70vh] place-items-center">
        <div className="text-center my-2 flex flex-col gap-3">
            <h1 className="text-[#85fd34] text-3xl font-bold">Solana Devnet Faucet</h1>
            <p className="font-medium text-gray-400" >Easily request free SOL tokens for testing on the Solana devnet. 
                Perfect for developers building and debugging dApps.</p>
        </div>
        <div className="flex gap-3 m-4">
          <input
            id="publicKey"
            className="outline-none border p-1 rounded-md"
            type="text"
            placeholder="Amount"
          />
          <button
            className="py-2 px-5 cursor-pointer border-2 border-[#85fd34] rounded-md text-[#85fd34] bg-transparent hover:bg-[#85fd34] hover:text-white transition"
            onClick={sendAirdropToUser}
          >
            Send Airdrop
          </button>
        </div>
        <div>
          <GetBalance balance={balance} setBalance={setBalance} />
        </div>
      </div>
    </div>
  );
}

export default Airdrop;
