import React from 'react';

const StatCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 w-[34rem] mx-auto">
      <div className="bg-teal-50 text-gray-800 rounded-lg p-4 flex flex-col justify-center h-[10vh]">
        <h2 className="text-2xl font-bold">98,000+</h2>
        <p className="text-sm">Active Retailers</p>
      </div>
      <div className="bg-gray-700 text-white rounded-lg p-4 flex flex-col justify-center row-span-2">
        <h2 className="text-2xl font-bold">Expert Team</h2>
      </div>
      <div className="bg-gray-600 text-white rounded-lg p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold">1,12,000+</h2>
        <p className="text-sm">Onboarded Clients</p>
      </div>
      <div className="bg-blue-800 text-white rounded-lg p-4 flex flex-col justify-center w-[500px] h-[15vh]">
        <h2 className="text-2xl font-bold">82%+</h2>
        <p className="text-sm">Clients Retention Rate</p>
      </div>
    </div>
  );
};

export default StatCards;