'use client';
import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className='py-1 px-2 text-[#f1f1f1] rounded bg-[#333] transition-colors duration-300 text-sm'
    >
      Değer: {count}
    </button>
  );
}

export default Counter;
