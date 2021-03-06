import React, { useEffect, useState } from 'react'
/* DEBUG */ import { Link } from 'swingby/router'

import { Page, List, Section, ListItem, useSwingby } from 'swingby'

import { LocaleKey } from '../i18n/messages'
import users from '../i18n/users'

const Users = () => {
  const swingby = useSwingby();
  const locale = swingby.i18n.locale as LocaleKey;

  const [userList, setUserList] = useState(users[locale]);

  useEffect(() => {
    setUserList(users[locale]);
  }, [locale]);

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
            {userList.map(user => {
              return (
                <ListItem
                  key={user.toString()}
                  label={user.name as string}
                >{user.name as string}</ListItem>
              );
            })}
          </Section>
        </List>
      </div>
      <Link to="counter">hello</Link>
    </Page>
  );
}

export default Users
