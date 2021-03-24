const API_URL = 'https://api.github.com'
const TOKEN = 'cf8c44604666f70f4c2f79aced95170809dab36c'

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

export { getUser, getUsers }
