import instance from '../axios'

export const createBlog = async (username, password) => {
  const json = JSON.stringify({ username: username, password: password })
  const response = await instance.post('blogs/', json)
  return response.data
}

export const getAllBlog = async () => {
    const response = await instance.get('blogs/')
    return response.data
}

export const getById = async (id) => {
    const response = await instance.get(`blogs/${id}`)
    return response.data
}

export const editBlog = async (id) => {
    const response = await instance.put(`blogs/${id}`)
    return response.data
}

export const deleteBlog = async (id) => {
    const response = await instance.delete(`blogs/${id}`)
    return response.data
}
