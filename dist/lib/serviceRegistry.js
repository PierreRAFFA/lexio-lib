"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var config_1 = require("./config");
function getServiceHost(apiVersion, serviceName) {
    return lodash_1.get(config_1.config, "[" + apiVersion + "][" + serviceName + "]");
}
exports.getServiceHost = getServiceHost;
//# sourceMappingURL=serviceRegistry.js.map