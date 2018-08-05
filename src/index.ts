// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
import { Request } from "express";
import { getUsers } from "./services/authentication";
import { postGame } from "./services/game";

export const LATEST_API_VERSION = '5.0';

class Lexio {

  /**
   *
   */
  private _originalReq: LexioRequest | undefined = undefined;

  constructor() {

  }

  /**
   *
   * @param {LexioRequest} req
   */
  public fromReq(req: LexioRequest): Lexio {
    this._originalReq = req;
    return this;
  }

  /**
   *
   * @param {Array<string>} ids
   * @param {string} apiVersion
   * @returns {Promise<Array<IUser>>}
   */
  public async getUsers(ids: Array<string>): Promise<Array<IUser>> {
    try {
      return await getUsers(this._originalReq, ids);
    } catch (e) {
      throw e;
    }
  }

  /**
   *
   */
  public async postGame(game: IGame): Promise<IGame> {
    try {
      return await postGame(this._originalReq, game);
    } catch (e) {
      throw e;
    }
  }
}
const lexio: Lexio = new Lexio();
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
