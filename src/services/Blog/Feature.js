import instance from '../axios'

export const createFeature = async (username, password) => {
  const json = JSON.stringify({ username: username, password: password })
  const response = await instance.post('features/', json)
  return response.data
}

export const getAllFeature = async () => {
    const response = await instance.get('features/')
    return response.data
}

export const getById = async (id) => {
    const response = await instance.get(`features/${id}`)
    return response.data
}

export const editFeature = async (id) => {
    const response = await instance.put(`features/${id}`)
    return response.data
}

export const deleteFeature = async (id) => {
    const response = await instance.delete(`features/${id}`)
    return response.data
}