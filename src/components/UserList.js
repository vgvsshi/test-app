import React from 'react'
import { UserBlock } from './UserBlock'
import '../styles/userList.scss'

export const UserList = ({ users }) => {
  return users ? (
    <ul className='userList'>
      {users.length ? (
        users.map(user => <UserBlock login={user.login} key={user.id} />)
      ) : (
        <div className='noUsers'>Not found</div>
      )}
    </ul>
  ) : (
    <div className='noUsers'>Loading...</div>
  )
}
