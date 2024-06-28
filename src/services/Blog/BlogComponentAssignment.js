import instance from '../axios'

export const createBlogComponentAssignment = async (username, password) => {
  const json = JSON.stringify({ username: username, password: password })
  const response = await instance.post('blog_component_assignments/', json)
  return response.data
}

export const getPerBlogComponentAssignment = async () => {
    const response = await instance.get('blog_component_assignments/')
    return response.data
}

export const getById = async (id) => {
    const response = await instance.get(`blog_component_assignments/${id}`)
    return response.data
}

export const editBlogComponentAssignment = async (id) => {
    const response = await instance.put(`blog_component_assignments/${id}`)
    return response.data
}

export const deleteBlogComponentAssignment = async (id) => {
    const response = await instance.delete(`blog_component_assignments/${id}`)
    return response.data
}