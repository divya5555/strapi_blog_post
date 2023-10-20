module.exports = [
   {
    method: "GET",
    path: "/",
    handler: "myController.index",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "GET",
    path: "/find",
    handler: "post.find",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "POST",
    path: "/create",
    handler: "post.create",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "DELETE",
    path: "/delete/:id",
    handler: "post.delete",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "PUT",
    path: "/toggle/:id",
    handler: "post.toggle",
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: "PUT",
    path: "/update/:id",
    handler: "post.update",
    config: {
      policies: [],
      auth: false,
    },
  },

];