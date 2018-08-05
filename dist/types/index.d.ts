import { Request } from "express";
import { getServiceHost } from "./serviceRegistry";
import { getAuthenticatedUser } from "./utils/utils";
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
}
declare const lexio: Lexio;
export { lexio };
export interface LexioRequest extends Request {
    user: {
        accessToken: string;
    };
}
export interface LexioError extends Error {
    statusCode: number;
}
export interface ApiVersions {
    [key: string]: IApiServices;
}
export interface IApiServices {
    [key: string]: string;
}
export interface IUser {
    id: string;
    username: string;
    email: string;
    statistics: object;
    identities: object;
    created: string;
    firebaseToken: string;
}
export interface IFullUser {
    id: string;
    username: string;
    email: string;
    balance: number;
    statistics: object;
    identities: object;
    created: string;
    firebaseToken: string;
    accessToken: string;
}
export interface IGame {
    id?: string;
    language: string;
    userId: string;
    user?: object;
    score: number;
    statistics: object;
    created?: string;
    serverDate?: string;
}
export interface IAuthenticate {
    access_token: string;
    jwt: string;
}
export { getServiceHost, getAuthenticatedUser };
