import React, { useState } from 'react'

import { Button } from 'swingby'

const CounterDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-demo column items-center">
      <div>You have clicked</div>
      <div
        className="text-h1"
      >{count}</div>
      <div>times.</div>
      <Button
        label="＋"
        onClick={() => {
          setCount(count + 1);
        }}
      />
    </div>
  );
}

export default CounterDemo
