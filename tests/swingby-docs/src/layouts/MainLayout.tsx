import React from 'react'
import { Outlet } from 'react-router-dom'

import {
  Layout,
  HeaderBar,
  HeaderBarLink,
  Navigation,
  PageContainer,
  Footer,
} from 'swingby'

import LanguageSelector from '../components/LanguageSelector'
import NavigationContent from '../components/NavigationContent'

const MainLayout = () => {
  return (
    <Layout className="main-layout">
      <HeaderBar
        logo="https://raw.githubusercontent.com/orbitrc/orbit-logo/master/orbit-logo.svg"
        title="Swingby Docs"
        color="primary"
        append={(
          <LanguageSelector />
        )}
      >
        <HeaderBarLink
          className="text-weight-bold"
          label="Guide"
          to="/guide"
        />
        <HeaderBarLink
          className="text-weight-bold"
          label="API"
          to="/api"
        />
        <HeaderBarLink
          className="text-weight-bold"
          label="Components"
          to="/components"
        />
      </HeaderBar>
      <PageContainer
        style={{
          maxWidth: '980px',
          margin: '0 auto',
        }}
      >
        <Navigation
          width="256px"
        >
          <NavigationContent />
        </Navigation>
        <Outlet />
      </PageContainer>
      <Footer>
        <div>Copyright &copy; 2022 Orbit Research Centre. All rights reserved.</div>
      </Footer>
    </Layout>
  );
}

export default MainLayout
