import instance from '../axios'

export const createContactAssignment = async (username, password) => {
  const json = JSON.stringify({ username: username, password: password })
  const response = await instance.post('contact_assignments/', json)
  return response.data
}

export const getAllContactAssignment = async () => {
    const response = await instance.get('contact_assignments/')
    return response.data
}

export const getById = async (id) => {
    const response = await instance.get(`contact_assignments/${id}`)
    return response.data
}

export const editContactAssignment = async (id) => {
    const response = await instance.put(`contact_assignments/${id}`)
    return response.data
}

export const deleteContactAssignment = async (id) => {
    const response = await instance.delete(`contact_assignments/${id}`)
    return response.data
}