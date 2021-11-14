import React from 'react'
import { useParams } from 'react-router-dom'

import { Page } from 'swingby'

const UserDetail = () => {
  const { id } = useParams();

  return (
    <Page>
      <div>
        User {id}
      </div>
    </Page>
  );
}

export default UserDetail
