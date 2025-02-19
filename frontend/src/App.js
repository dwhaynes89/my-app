import { ethers } from "ethers";
import React, { useState } from "react";
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractABI = [ /* Your Smart Contract ABI */ ];

function App() {
  const [message, setMessage] = useState("");
  const [wallet, setWallet] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      setWallet(signer);
    } else {
      alert("MetaMask not installed!");
    }
  }

  async function sendMessage() {
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);
    await contract.sendMessage(message);
    alert("Message sent!");
  }

  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      <input onChange={(e) => setMessage(e.target.value)} placeholder="Enter message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;

