import { IAuthenticate, IFullUser, LexioRequest } from "../index";
/**
 *
 * @param {LexioRequest} req
 * @param {string} facebookToken
 * @param {string} firebaseToken
 * @returns {Promise<IUser>}
 */
export declare function authenticateViaFacebook(req: LexioRequest | undefined, facebookToken: string, firebaseToken: string): Promise<IFullUser>;
/**
 *
 * @param {LexioRequest} req
 * @param {string} email
 * @param {string} password
 * @returns {Promise<IUser>}
 */
export declare function authenticate(req: LexioRequest | undefined, email: string, password: string): Promise<IAuthenticate>;
