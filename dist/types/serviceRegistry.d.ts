import { ApiVersions } from "./index";
export declare class ServiceRegistry {
    protected _versions: ApiVersions;
    constructor();
    /**
     * Registers a service
     *
     * @param {string} apiVersion
     * @param {string} serviceName
     * @param {string} serviceHost
     */
    register(apiVersion: string, serviceName: string, serviceHost: string): void;
    /**
     * Returns the host for a specific service
     *
     * @param {string} apiVersion
     * @param {string} serviceName
     * @returns {any}
     */
    getServiceHost(apiVersion: string, serviceName: string): string;
}
declare const _default: ServiceRegistry;
export default _default;
