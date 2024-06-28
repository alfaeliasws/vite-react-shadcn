import instance from '../axios'

export const createContactType = async (username, password) => {
  const json = JSON.stringify({ username: username, password: password })
  const response = await instance.post('contact_types/', json)
  return response.data
}

export const getAllContactType = async () => {
    const response = await instance.get('contact_types/')
    return response.data
}

export const getById = async (id) => {
    const response = await instance.get(`contact_types/${id}`)
    return response.data
}

export const editContactType = async (id) => {
    const response = await instance.put(`contact_types/${id}`)
    return response.data
}

export const deleteContactType = async (id) => {
    const response = await instance.delete(`contact_types/${id}`)
    return response.data
}