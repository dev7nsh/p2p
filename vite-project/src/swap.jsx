import React, { useState } from 'react';

const SimplifiedSwapInterface = () => {
  const [topAmount, setTopAmount] = useState('');
  const [bottomAmount, setBottomAmount] = useState('');
  const [topToken, setTopToken] = useState('USDT');
  const [bottomToken, setBottomToken] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(83.27); // 1 USDT = 83.27 INR
  
  // Handle top token input change
  const handleTopAmountChange = (e) => {
    const value = e.target.value;
    setTopAmount(value);
    
    // Calculate equivalent in bottom token
    if (value && !isNaN(value)) {
      setBottomAmount((parseFloat(value) * exchangeRate).toFixed(2));
    } else {
      setBottomAmount('');
    }
  };
  
  // Handle bottom token input change
  const handleBottomAmountChange = (e) => {
    const value = e.target.value;
    setBottomAmount(value);
    
    // Calculate equivalent in top token
    if (value && !isNaN(value)) {
      setTopAmount((parseFloat(value) / exchangeRate).toFixed(6));
    } else {
      setTopAmount('');
    }
  };
  
  // Swap tokens function
  const swapTokens = () => {
    const tempToken = topToken;
    setTopToken(bottomToken);
    setBottomToken(tempToken);
    
    // Update exchange rate (inverse)
    setExchangeRate(1 / exchangeRate);
    
    // Swap amounts
    const tempAmount = topAmount;
    setTopAmount(bottomAmount);
    setBottomAmount(tempAmount);
  };

  return (
    <div className="max-w-md w-full">
      <div className="border-2 border-blue-200 rounded-3xl overflow-hidden shadow">
        {/* Top Token Section */}
        <div className="bg-gray-100 p-4">
          <div className="bg-gray-200 rounded-2xl p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {topToken === 'USDT' ? (
                <div className="w-8 h-8 rounded-full bg-teal-500 flex justify-center items-center text-white font-bold">
                  T
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center text-white font-bold">
                  ₹
                </div>
              )}
              <div className="flex items-center">
                <span className="font-bold text-purple-900 text-xl">{topToken}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <input
              type="number"
              value={topAmount}
              onChange={handleTopAmountChange}
              placeholder="0.00"
              className="bg-transparent text-xl text-right focus:outline-none text-teal-500 font-bold w-1/2"
            />
          </div>
        </div>
        
        {/* Swap Button */}
        <div className="flex justify-center -my-4 relative z-10">
          <button 
            onClick={swapTokens}
            className="bg-white border-2 border-teal-300 rounded-full p-2 shadow hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </button>
        </div>
        
        {/* Bottom Token Section */}
        <div className="bg-gray-100 p-4 pt-8">
          <div className="bg-gray-200 rounded-2xl p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {bottomToken === 'INR' ? (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex justify-center items-center text-white font-bold">
                  ₹
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-teal-500 flex justify-center items-center text-white font-bold">
                  T
                </div>
              )}
              <div className="flex items-center">
                <span className="font-bold text-purple-900 text-xl">{bottomToken}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <input
              type="number"
              value={bottomAmount}
              onChange={handleBottomAmountChange}
              placeholder="0.00"
              className="bg-transparent text-xl text-right focus:outline-none text-teal-500 font-bold w-1/2"
            />
          </div>
        </div>
        
        {/* Swap Button */}
        <div className="p-4 bg-white">
          <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-bold">
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimplifiedSwapInterface;