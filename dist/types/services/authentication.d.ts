import { IUser, LexioRequest } from "../index";
/**
 *
 * @param {Array<string>} ids
 * @param {string} apiVersion
 * @returns {Promise<Array<IUser>>}
 */
export declare function getUsers(req: LexioRequest | undefined, ids: Array<string>): Promise<Array<IUser>>;
