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
        title="Swingby Demo"
      >
        <HeaderBarLink
          className="text-weight-bold"
          label="Home"
        />
        <HeaderBarLink
          className="text-weight-bold"
          label="Counter"
          to="/counter"
        />
        <HeaderBarLink
          className="text-weight-bold"
          label="Users"
          to="/users"
        />
      </HeaderBar>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </Layout>
  );
}

export default MainLayout
