'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.db.query('api::product.product').findOne(
            {
                where: { slug: id },
                populate: ['img', 'categories']
                // where: { id: id }
            }
        );
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity)
    }
}));

// module.exports = createCoreController('api::product.product');
