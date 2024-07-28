"use client";  // Add this line at the top

import React from 'react';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  amount: number;
}

const AnimatedCounter =({amount}: {amount:number}) => {
  return (
    <div className="w-full">
      <CountUp 
        decimals={2}
        decimal=","
        prefix="$"
        end={amount}/>
    </div>
  )
}

export default AnimatedCounter;
