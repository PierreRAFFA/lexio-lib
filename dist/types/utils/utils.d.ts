import { LexioError, LexioRequest } from "../index";
export declare function error(message: string, statusCode: number): LexioError;
/**
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
export declare function getApiVersion(req: LexioRequest | undefined): string;
/**
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
export declare function getAccessToken(req: LexioRequest | undefined): string;
/**
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
export declare function getJwt(req: LexioRequest): string;
/**
 *
 * @param options
 * @returns {Promise<any>}
 */
export declare function requestPromise(options: any): Promise<any>;
