import React from 'react'
import { UserBlock } from './UserBlock'
import '../styles/userList.scss'

export const UserList = ({ users }) => {
  return (
    <ul className='userList'>
      {users
        ? users.map(user => <UserBlock login={user.login} key={user.id} />)
        : 'Loading...'}
    </ul>
  )
}
