import React from 'react'
import { Outlet } from 'react-router-dom'

import {
  Layout,
  HeaderBar,
  HeaderBarLink,
  PageContainer,
  Footer,
} from 'swingby'

import LanguageSelector from '../components/LanguageSelector'

const MainLayout = () => {
  return (
    <Layout className="main-layout">
      <HeaderBar
        logo="https://raw.githubusercontent.com/orbitrc/orbit-logo/master/orbit-logo.svg"
        title="Swingby Demo"
        append={(
          <LanguageSelector />
        )}
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
      <Footer>
        <div>Copyright &copy; 2021 NAME All rights reserved.</div>
      </Footer>
    </Layout>
  );
}

export default MainLayout
