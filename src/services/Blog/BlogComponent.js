import instance from '../axios'

export const createBlogComponent = async (username, password) => {
  const json = JSON.stringify({ username: username, password: password })
  const response = await instance.post('blog_components/', json)
  return response.data
}

export const getAllBlogComponent = async () => {
    const response = await instance.get('blog_components/')
    return response.data
}

export const getById = async (id) => {
    const response = await instance.get(`blog_components/${id}`)
    return response.data
}

export const editBlogComponent = async (id) => {
    const response = await instance.put(`blog_components/${id}`)
    return response.data
}

export const deleteBlogComponent = async (id) => {
    const response = await instance.delete(`blog_components/${id}`)
    return response.data
}
