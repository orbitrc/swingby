import React, { useState } from 'react'

import { Page, Select } from 'swingby'

const Playground = () => {
  const [selectValue, setSelectValue] = useState('microsoft');

  return (
    <Page>
      <div>Playground</div>
      <Select
        value={selectValue}
        onChange={e => setSelectValue(e.target.value)}
        options={[
          {
            value: 'microsoft',
            label: 'Microsoft',
          },
          {
            value: 'apple',
            label: 'Apple',
          },
          {
            value: 'twitter',
            label: 'Twitter',
          },
        ]}
      />
    </Page>
  );
}

export default Playground
