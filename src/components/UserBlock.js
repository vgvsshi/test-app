import React, { useEffect, useState } from 'react'
import { getUser } from '../api'

export const UserBlock = ({ login }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    getUser(login).then(res => setUser(res))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return user ? (
    <li className='userList__item'>
      <div className='avatar'>
        <img src={user.avatar_url} alt='' />
      </div>
      <div className='details'>
        <span className='login'>{user.login}</span>
        <span className='detail bio'>{user.bio ? `Bio: ${user.bio}` : ''}</span>
        <span className='detail blog'>
          {user.blog ? `Blog: ${user.blog}` : ''}
        </span>
        <span className='detail company'>
          {user.company ? `Company: ${user.company}` : ''}
        </span>
        <span className='detail followers'>Followers: {user.followers}</span>
      </div>
    </li>
  ) : (
    '...Loading'
  )
}
