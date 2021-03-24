import React from 'react'
import '../styles/search.scss'

export const Search = ({ value, onChange, onClick, onEnter }) => {
  return (
    <div className='input-field'>
      <input
        type='text'
        name='search'
        value={value}
        onChange={onChange}
        onKeyDown={onEnter}
        placeholder='Username'
      />
      <button onClick={onClick}>Search</button>
    </div>
  )
}
