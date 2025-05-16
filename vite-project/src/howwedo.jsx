import { useState } from 'react';

const CryptoTradingFlow=() =>{
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      title: "Trade Initiation",
      icon: "👤",
      content: [
        "The Buyer or Seller initiates a trade request on Z, specifying:",
        "Amount of USDT to be exchanged.",
        "Agreed INR price (based on real-time exchange rates or negotiated price).",
        "Preferred payment method (Bank transfer, UPI, Cash deposit, etc.)."
      ]
    },
    {
      title: "Transfer & Confirmation",
      icon: "🔒",
      content: [
        "Z notifies Seller that funds are secured.",
        "Seller sends INR to Buyer through the agreed method and uploads proof of payment.",
        "Buyer confirms INR receipt in their account within a set timeframe."
      ]
    },
    {
      title: "USDT Release",
      icon: "💰",
      content: [
        "Once confirmed, Z releases USDT (converted back from stablecoin) to the Seller.",
        "If disputes arise, Z's team investigates and resolves them fairly.",
        "Both parties leave feedback to build trust."
      ]
    }
  ];

  const icons = {
    "👤": (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="black" strokeWidth="1.5"/>
        <path d="M20 19C20 16.7909 16.4183 15 12 15C7.58172 15 4 16.7909 4 19" stroke="black" strokeWidth="1.5"/>
      </svg>
    ),
    "🔒": (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 9V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V9" stroke="black" strokeWidth="1.5"/>
        <rect x="5" y="9" width="14" height="12" rx="2" stroke="black" strokeWidth="1.5"/>
        <circle cx="12" cy="15" r="2" stroke="black" strokeWidth="1.5"/>
      </svg>
    ),
    "💰": (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V18" stroke="black" strokeWidth="1.5"/>
        <path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="black" strokeWidth="1.5"/>
        <path d="M7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3Z" stroke="black" strokeWidth="1.5"/>
      </svg>
    )
  };

  return (
    <div className="w-4xl  p-4 ">
      <div className="border border-purple-200 rounded-lg p-6 shadow-md bg-white">
        <div className="flex">
          {/* Left side with icon and information */}
          <div className="w-1/2 pr-6">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 border border-gray-300 rounded-md flex items-center justify-center">
                {icons[steps[activeStep].icon]}
              </div>
            </div>
            
            {/* Content list with animation */}
            <div className="min-h-48">
              <ul className="list-none text-sm">
                {steps[activeStep].content.map((item, i) => (
                  <li key={i} className={`mb-2 ${i === 0 ? "" : "flex items-start"}`}>
                    {i > 0 && <span className="text-purple-600 mr-2">•</span>}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right side with step navigation */}
          <div className="w-1/2 flex flex-col justify-center pl-6">
            {/* Three steps displayed vertically */}
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`mb-4 text-xl font-mono transition-colors duration-300 ${
                  index === activeStep 
                    ? 'text-indigo-900 font-bold' 
                    : 'text-gray-300'
                }`}
                onMouseEnter={() => setActiveStep(index)}
              >
                {step.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default CryptoTradingFlow;
