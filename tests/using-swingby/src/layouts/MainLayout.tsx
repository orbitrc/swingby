import React from 'react'
import { Routes, Route, useLocation, RouteObject } from 'react-router-dom'

import {
  Layout,
  HeaderBar,
  HeaderBarLink,
  PageContainer,
} from 'swingby'

interface MainLayoutProps {
  children: RouteObject[];
}

const MainLayout = (props: MainLayoutProps) => {
  const location = useLocation();

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
        <Routes>
          <Route path={location.pathname} />
        </Routes>
      </PageContainer>
    </Layout>
  );
}

MainLayout.defaultProps = {
  children: [],
};

export default MainLayout
