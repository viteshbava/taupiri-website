import React from 'react';

const page = () => {
  return (
    <div
      className='min-h-screen w-full'
      style={{
        backgroundColor: '#e2e8f0',
        backgroundImage: `
          linear-gradient(45deg, rgba(255,255,255,0.8) 25%, transparent 25%),
          linear-gradient(-45deg, rgba(255,255,255,0.8) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.5) 75%),
          linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.5) 75%)
        `,
        backgroundSize: '30px 30px',
        backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px',
      }}>
      <div className='p-8'>
        <h1 className='text-2xl font-bold text-gray-800'>Poutama</h1>
        <p className='text-gray-600 mt-4'>This page has a subtle step pattern background.</p>
      </div>
    </div>
  );
};

export default page;
