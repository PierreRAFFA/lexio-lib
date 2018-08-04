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
 * @returns {Promise<T>}
 */
export declare function requestGet<T>(options: any): Promise<T>;
/**
 *
 * @param options
 * @returns {Promise<T>}
 */
export declare function requestPost<T>(options: any): Promise<T>;
