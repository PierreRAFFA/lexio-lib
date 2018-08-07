import { getServiceHost } from "./serviceRegistry";
import { createError, getAuthenticatedUser } from "./utils/utils";
import { accessControl } from "./middlewares/accessControl";
import { IAuthenticate, IFullUser, IGame, IIdentity, IProfile, IRanking, IRankingItem, IUser, LexioRequest } from "./interfaces";
export declare const LATEST_API_VERSION = "1.0";
declare class Lexio {
    /**
     *
     */
    private _originalReq;
    constructor();
    /**
     *
     * @param {LexioRequest} req
     */
    fromReq(req: LexioRequest): Lexio;
    /**
     *
     * @param {Array<string>} ids
     * @param {string} apiVersion
     * @returns {Promise<Array<IUser>>}
     */
    authenticate(email: string, password: string): Promise<IAuthenticate>;
    /**
     *
     * @param {Array<string>} ids
     * @param {string} apiVersion
     * @returns {Promise<Array<IUser>>}
     */
    authenticateViaFacebook(facebookToken: string, firebaseToken: string): Promise<IFullUser>;
    /**
     *
     * @param {Array<string>} ids
     * @param {string} apiVersion
     * @returns {Promise<Array<IUser>>}
     */
    me(): Promise<IFullUser>;
    /**
     *
     * @param {Array<string>} ids
     * @param {string} apiVersion
     * @returns {Promise<Array<IUser>>}
     */
    getUsers(ids: Array<string>): Promise<Array<IUser>>;
    /**
     *
     */
    postGame(game: IGame): Promise<IGame>;
    /**
     *
     */
    getRanking(language: string, rankingReference: string): Promise<IRanking>;
}
declare const lexio: Lexio;
export { lexio };
export { IRanking, IRankingItem, IUser, IFullUser, IGame, IAuthenticate, IIdentity, IProfile, LexioRequest };
export { getServiceHost, getAuthenticatedUser, createError, accessControl };
