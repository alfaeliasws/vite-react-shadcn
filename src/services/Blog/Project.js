import instance from '../axios'

export const createProject = async (username, password) => {
  const json = JSON.stringify({ username: username, password: password })
  const response = await instance.post('projects/', json)
  return response.data
}

export const getAllProject = async () => {
    const response = await instance.get('projects/')
    return response.data
}

export const getById = async (id) => {
    const response = await instance.get(`projects/${id}`)
    return response.data
}

export const editProject = async (id) => {
    const response = await instance.put(`projects/${id}`)
    return response.data
}

export const deleteProject = async (id) => {
    const response = await instance.delete(`projects/${id}`)
    return response.data
}