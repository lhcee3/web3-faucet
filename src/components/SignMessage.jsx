import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import React from 'react';
import { toast } from 'react-toastify';

const SignMessage = () => {
    const { publicKey, signMessage } = useWallet();

    const handleSignMessage = async () => {
        if (!publicKey) {
            toast.error("Wallet is not connected");
        }

        if (!signMessage) {
            toast.error("Wallet doesn't support sign message!");
        }

        const inputElement = document.getElementById('message');
        const message = inputElement.value;
        if(!message.trim()) {
            toast.error("Please write the message !");
            return;
        }
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
            throw new Error("Message signature invalid");
        }

        alert(`Message signature: ${bs58.encode(signature)}`);
        inputElement.value = '';
    };

    return (
        <div className="flex flex-col items-center justify-center h-[70vh]">
            <h1 className="text-3xl text-[#85fd34] font-bold text-center mb-2">Solana Message Signer</h1>
            <p className="text-gray-600 text-center mb-6">Sign a custom message with your connected wallet</p>

            <div className="flex gap-2">
                <input
                    className="border border-gray-300 p-2 rounded outline-none w-64"
                    type="text"
                    id="message"
                    placeholder="Enter message to sign"
                />
                <button
                    className="border-2 border-[#85fd34] text-[#85fd34] bg-transparent px-4 py-2 rounded hover:bg-[#85fd34] hover:text-white transition"
                    onClick={handleSignMessage}
                >
                    Sign Message
                </button>
            </div>
        </div>
    );
};

export default SignMessage;
