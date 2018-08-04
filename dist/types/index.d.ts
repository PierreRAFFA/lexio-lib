import { Request } from "express";
export declare const LATEST_API_VERSION = "5.0";
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
export interface IGame {
    id: string;
    language: string;
    userId: string;
    user?: object;
    score: number;
    statistics: object;
    created: string;
    serverDate?: string;
}
