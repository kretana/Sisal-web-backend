'use strict';

/**
 * job-area service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-area.job-area');
