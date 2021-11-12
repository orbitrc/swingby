import React, { useState } from 'react'

import { Button } from 'swingby'

const CounterDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-demo">
      <div>You have clicked</div>
      <div>{count}</div>
      <div>times.</div>
      <Button
        label="+"
        onClick={() => {
          setCount(count + 1);
        }}
      />
    </div>
  );
}

export default CounterDemo
