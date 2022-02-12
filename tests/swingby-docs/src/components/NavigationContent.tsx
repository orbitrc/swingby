import React from 'react'

import { List, Section, ListItem } from 'swingby'

const NavigationContent = () => {
  return (
    <List>
      <Section
        header="Guide"
      >
        <ListItem
          label="Getting Started"
          to="/guide/getting-started"
        ></ListItem>
        <ListItem
          label="Layout"
        ></ListItem>
      </Section>
      <Section
        header="API"
      >
        <ListItem
          label="useSwingby"
        ></ListItem>
      </Section>
      <Section
        header="Components"
      >
        <ListItem
          label="Button"
          to="/components/button"
        ></ListItem>
      </Section>
    </List>
  );
}

export default NavigationContent
