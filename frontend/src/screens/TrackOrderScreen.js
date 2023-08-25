import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router
import '../css/TrakcOrderScreen.css';

function TrackOrderScreen() {
  const [orderNumber, setOrderNumber] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the order number meets your condition (for example, a specific ID)
    if (orderNumber === '/order/:id') {
      // Navigate to a different screen with the order number as a parameter
      history(`/order/${orderNumber}`);
    } else {
      // Handle the case where the order number doesn't match the condition
      alert('Invalid Order Number');
      // You can also clear the orderNumber state here
      // setOrderNumber('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Track Your Order</h1>
        <form onSubmit={handleSubmit} className="order-form">
          <input
            type="text"
            placeholder="Enter Order Number"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
      {/* ... rest of the component */}
    </div>
  );
}

export default TrackOrderScreen;
