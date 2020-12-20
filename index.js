const { createEndpoint } = require("@dpdpdp/sdk");
const dp = require("./dp");

exports.handler = createEndpoint(dp);
