"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany("plugin::post.post", query);
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::post.post", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::post.post", data);
  },

  async update(id, data) {
    return await strapi.entityService.update("plugin::post.post", id, data);
  },

  async toggle(id) {
    const result = await strapi.entityService.findOne("plugin::post.post", id);
    return await strapi.entityService.update("plugin::post.post", id, {
      data: { isDone: !result.isDone },
    });
  },
});