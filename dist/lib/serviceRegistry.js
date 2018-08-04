"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var ServiceRegistry = /** @class */ (function () {
    function ServiceRegistry() {
        this._versions = {};
    }
    /**
     * Registers a service
     *
     * @param {string} apiVersion
     * @param {string} serviceName
     * @param {string} serviceHost
     */
    ServiceRegistry.prototype.register = function (apiVersion, serviceName, serviceHost) {
        if (apiVersion in this._versions == false) {
            this._versions[apiVersion] = {};
        }
        this._versions[apiVersion][serviceName] = serviceHost;
    };
    /**
     * Returns the host for a specific service
     *
     * @param {string} apiVersion
     * @param {string} serviceName
     * @returns {any}
     */
    ServiceRegistry.prototype.getServiceHost = function (apiVersion, serviceName) {
        return lodash_1.get(this._versions, "[" + apiVersion + "][" + serviceName + "]");
    };
    return ServiceRegistry;
}());
exports.ServiceRegistry = ServiceRegistry;
exports.default = new ServiceRegistry();
//# sourceMappingURL=serviceRegistry.js.map