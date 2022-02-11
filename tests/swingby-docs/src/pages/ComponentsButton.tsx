import React from 'react'

import { Page, Button } from 'swingby'

import PropsTable from '../components/PropsTable'

const ComponentsButton = () => {
  const buttonCode = '<Button\n'
    + '  label="Click"\n'
    + '/>';

  return (
    <Page>
      <div>
        <h1>Button</h1>
        <p>Button.</p>
        <code
          style={{
            whiteSpace: 'pre',
          }}
        >
          {buttonCode}
        </code>
        <div
          className="row"
          style={{
            width: '100%',
          }}
        >
          <div
            className="col-4 row justify-center"
          >
            <Button
              label="Rectangle"
            />
          </div>
          <div
            className="col-4 row justify-center"
          >
            <Button
              label="Round"
              appearance="round"
            />
          </div>
          <div
            className="col-4 row justify-center"
          >
            <Button
              label="Sharp"
              appearance="sharp"
            />
          </div>
        </div>

        <PropsTable
          title="ButtonProps"
          contents={[
            {
              name: 'appearance',
              type: "'rectangle' | 'round' | 'sharp'",
              default: "'rectangle'",
              desc: 'Shape of button. The default value is \'rectangle\''
                + ' which is ractangle shape with slight radius.'
                + ' \'round\' value sets button fully rounded radius,'
                + ' and if you set this prop to \'sharp\', the radius will be removed.',
            },
            {
              name: 'label',
              type: 'string',
              default: "'Button'",
              desc: 'Text of button.'
            },
            {
              name: 'onClick',
              type: 'React.MouseEventHandler<HTMLButtonElement>',
              default: 'null',
              desc: 'Button onClick event handler.',
            },
          ]}
        />
      </div>
    </Page>
  );
}

export default ComponentsButton
