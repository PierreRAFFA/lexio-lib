import { IFullUser, LexioError, LexioRequest } from "../index";
export declare function createError(message: string, statusCode: number): LexioError;
/**
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
export declare function getApiVersion(req: LexioRequest | undefined): string;
/**
 * Returns the access_token send by the client
 *
 * user.accessToken added by the authenticate middleware of the gateway
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
 * Returns the access_token send by the client
 *
 * user.accessToken added by the authenticate middleware of the gateway
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
export declare function getAuthenticatedUser(req: LexioRequest | undefined): IFullUser;
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
