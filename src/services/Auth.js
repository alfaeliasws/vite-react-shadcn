import instance from '../axios'

export const login = async (username, password) => {
  const json = JSON.stringify({ username: username, password: password })
  const response = await instance.post('auth/login', json)

  return response.data
}

export const register = async (email, username, password) => {
  const json = JSON.stringify({ email: email, username: username, password: password })
  const response = await instance.post('auth/login', json)

  return response.data
}