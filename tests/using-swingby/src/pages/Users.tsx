import React from 'react'

import { Page, List, Section } from 'swingby'

const Users = () => {
  return (
    <Page>
      <div>
        Users:
        <List>
          <Section
            header={
              <div>Users</div>
            }
          >
            <div>Jane Doe</div>
            <div>John Smith</div>
            <button>Click!</button>
          </Section>
        </List>
      </div>
    </Page>
  );
}

export default Users
