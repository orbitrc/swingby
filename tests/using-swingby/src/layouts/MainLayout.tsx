import React from 'react'

import { Routes, Route } from 'react-router-dom'

import {
  Layout,
  HeaderBar,
  HeaderBarLink,
  PageContainer,
} from 'swingby'

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
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
        </Routes>
      </PageContainer>
    </Layout>
  );
}

MainLayout.defaultProps = {
  children: [],
};

export default MainLayout
