import React from 'react'

import { Page } from 'swingby'

import './Index.scss'

const Index = () => {
  return (
    <Page
      className="index"
      style={{
        padding: '1.5rem',
      }}
    >
      <div
        className="index__intro text-h1"
      >
        <div>Swingby,</div>
        <div>A React Framework.</div>
      </div>
      <div
        className="index__what"
      >
        <h2>What is Swingby?</h2>
        <p>Swingby is a React web frontend framework with many ready-to-use features.</p>
      </div>
    </Page>
  );
}

export default Index
