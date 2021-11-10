import React from 'react'
import { Outlet } from 'react-router-dom'

import {
  Layout,
  HeaderBar,
  HeaderBarLink,
  PageContainer,
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
      <PageContainer>
        <Outlet />
      </PageContainer>
    </Layout>
  );
}

export default MainLayout
