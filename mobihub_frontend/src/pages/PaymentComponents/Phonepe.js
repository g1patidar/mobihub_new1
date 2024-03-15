import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Phonepe = () => {
  const [upiId, setUpiId] = useState('');
  const [amount, setAmount] = useState('');
  const makePayment = useNavigate();

  const handlePayment = () => {
    // Implement UPI payment processing logic here (simulated for educational purposes).
    console.log(`Processing UPI payment of ${amount} to ${upiId}`);
    makePayment('/ordercomplete')
  };

  return (
    <div className="phonepe-container">
      <h2>UPI Payment Phonepe</h2>
      <form className="phonepe-form">
        <label>
          UPI ID:
          <input
            type="text"
            name="upiId"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="phonepe-input"
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
            className="phonepe-input"
          />
        </label>
        <br />
        <button type="button" onClick={handlePayment} className="phonepe-button">
          Make UPI Payment
        </button>
      </form>
      
    </div>
  );
};

export default Phonepe;
