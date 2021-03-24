import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Search } from './components/Search'
import { UserList } from './components/UserList'
import { getUsers, getUser } from './api'
import './App.css'

const App = () => {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  useEffect(() => {
    getUsers().then(data => setUsers(data))
  }, [])
  const HandleSearch = () => {
    if (search.trim()) getUser(search.trim()).then(res => setUsers([res]))
    else getUsers().then(data => setUsers(data))
  }
  const HandleKeyPress = e => {
    if (e.key === 'Enter') {
      if (search.trim()) getUser(search.trim()).then(res => setUsers([res]))
      else getUsers().then(data => setUsers(data))
    }
  }
  return (
    <>
      <Navbar />
      <div className='container'>
        <Search
          value={search}
          onChange={e => setSearch(e.target.value)}
          onClick={HandleSearch}
          onEnter={HandleKeyPress}
        />
        <UserList users={users} />
      </div>
    </>
  )
}

export default App
