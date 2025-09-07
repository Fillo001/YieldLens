import { useState } from "react";

export default function PoolCard() {
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    alert(`Deposit ${amount} TUSD`);
  };

  const handleWithdraw = () => {
    alert("Withdraw all TUSD + Yield");
  };

  return (
    <div className="mt-8 p-6 border rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-2">Community Savings Pool</h2>
      <input
        type="number"
        placeholder="Amount (TUSD)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mr-2"
      />
      <button
        onClick={handleDeposit}
        className="bg-green-600 text-white px-4 py-2 rounded mr-2"
      >
        Deposit
      </button>
      <button
        onClick={handleWithdraw}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Withdraw
      </button>
    </div>
  );
}
