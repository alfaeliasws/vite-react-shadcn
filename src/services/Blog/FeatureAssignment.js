import instance from '../axios'

export const createFeatureAssignment = async (username, password) => {
  const json = JSON.stringify({ username: username, password: password })
  const response = await instance.post('feature_assignments/', json)
  return response.data
}

export const getPerProject = async () => {
    const response = await instance.get('feature_assignments/')
    return response.data
}

export const getById = async (id) => {
    const response = await instance.get(`feature_assignments/${id}`)
    return response.data
}

export const editFeatureAssignment = async (id) => {
    const response = await instance.put(`feature_assignments/${id}`)
    return response.data
}

export const deleteFeatureAssignment = async (id) => {
    const response = await instance.delete(`feature_assignments/${id}`)
    return response.data
}