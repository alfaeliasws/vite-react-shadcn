import instance from '../axios'

export const createUser = async (username, password) => {
  const json = JSON.stringify({ username: username, password: password })
  const response = await instance.post('users/', json)
  return response.data
}

export const getAllUser = async () => {
    const response = await instance.get('users/')
    return response.data
}

export const getById = async (id) => {
    const response = await instance.get(`users/${id}`)
    return response.data
}

export const editUser = async (id) => {
    const response = await instance.put(`users/${id}`)
    return response.data
}

export const deleteUser = async (id) => {
    const response = await instance.delete(`users/${id}`)
    return response.data
}