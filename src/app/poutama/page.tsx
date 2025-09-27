import React from 'react';

const page = () => {
  return (
    <div
      className='min-h-screen w-full'
      style={{
        backgroundColor: '#e2e8f0',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60 L0 40 L20 40 L20 20 L40 20 L40 0 L60 0 L60 20 L40 20 L40 40 L20 40 L20 60 Z' fill='%23f8fafc' stroke='%23cbd5e1' stroke-width='1'/%3E%3C/svg%3E")`,
      }}>
      <div className='p-8'>
        <h1 className='text-2xl font-bold text-gray-800'>Poutama</h1>
        <p className='text-gray-600 mt-4'>This page has a subtle step pattern background.</p>
      </div>
    </div>
  );
};

export default page;
