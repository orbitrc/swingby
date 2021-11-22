import React, { useState } from 'react'

import { Button, useSwingby } from 'swingby'

import messages from '../i18n/messages'

const CounterDemo = () => {
  const swingby = useSwingby();
  console.log(swingby.i18n.locale);
  const locale = swingby.i18n.locale;

  const [count, setCount] = useState(0);

  return (
    <div className="counter-demo column items-center">
      <div>{messages['counter-prepend'][locale]}</div>
      <div
        className="text-h1"
      >{count}{messages['counter-unit'][locale]}</div>
      <div>{messages['counter-append'][locale]}</div>
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
