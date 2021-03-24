const API_URL = 'https://api.github.com'
const TOKEN = '0ffd892b48fcf1f93251227a0293fcdde224c141'

const getUsers = async () => {
  const res = await fetch(`${API_URL}/users?per_page=100`, {
    method: 'GET',
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  })
  const data = await res.json()
  return data
}

const getUser = async username => {
  const res = await fetch(`${API_URL}/users/${username}`, {
    method: 'GET',
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  })
  const data = await res.json()
  return data
}

const searchUsers = async username => {
  const res = await fetch(`${API_URL}/search/users?q=${username}`, {
    method: 'GET',
    headers: {
      Authorization: `token ${TOKEN}`,
    },
  })
  const data = await res.json()
  return data
}

export { getUser, getUsers, searchUsers }
