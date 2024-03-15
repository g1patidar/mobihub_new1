import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Upi = () => {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const makePayment = useNavigate();

  const handlePayment = () => {
    // Implement UPI payment processing logic here (simulated for educational purposes).
    console.log('UPI payment processing...');
    makePayment('/ordercomplete')
    
  };

  return (
    <div className="upi-container">
      <h2>UPI Payment UPI</h2>
      <form className="upi-form">
        <label>
          UPI ID:
          <input
            type="text"
            name="upiId"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="upi-input"
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="upi-input"
          />
        </label>
        <br />
        <button type="button" onClick={handlePayment} className="upi-button">
          Make UPI Payment
        </button>
      </form>
      
    </div>
  );
};

export default Upi;
