import { request } from "@strapi/helper-plugin";

const postRequests = {
  getAllPosts: async () => {
    return await request("/post/find", {
      method: "GET",
    });
  },

  addPost: async (data) => {
    return await request(`/post/create`, {
      method: "POST",
      body: { data: data },
    });
  },

  togglePost: async (id) => {
    return await request(`/post/toggle/${id}`, {
      method: "PUT",
    });
  },

  editPost: async (id, data) => {
    return await request(`/post/update/${id}`, {
      method: "PUT",
      body: { data: data },
    });
  },

  deletePost: async (id) => {
    return await request(`/post/delete/${id}`, {
      method: "DELETE",
    });
  },
};

export default postRequests;