import React from 'react'

import {
  Layout,
  HeaderBar,
  HeaderBarLink,
} from 'swingby'

const MainLayout = () => {
  return (
    <Layout className="main-layout">
      <HeaderBar
        logo="https://raw.githubusercontent.com/orbitrc/orbit-logo/master/orbit-logo.svg"
      >
        <HeaderBarLink
          className="text-weight-bold"
          label="Lorem"
        />
        <HeaderBarLink
          className="text-weight-bold"
          label="Ipsum"
        />
        <div>Hello!</div>
      </HeaderBar>
    </Layout>
  );
}

export default MainLayout
