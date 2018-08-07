// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
  // import "core-js/fn/array.find"
  // ...
import { getUsers, me } from "./services/user";
import { getRanking, postGame } from "./services/game";
import { getServiceHost } from "./serviceRegistry";
import { authenticate, authenticateViaFacebook } from "./services/authentication";
import { createError, getAuthenticatedUser } from "./utils/utils";
import { accessControl } from "./middlewares/accessControl";
import {
  IAuthenticate,
  IFullUser,
  IGame,
  IIdentity,
  IProfile,
  IRanking,
  IRankingItem,
  IUser,
  LexioRequest
} from "./interfaces";

export const LATEST_API_VERSION = '1.0';

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
  public async authenticate(email: string, password: string): Promise<IAuthenticate> {
    try {
      return await authenticate(this._originalReq, email, password);
    } catch (e) {
      throw e;
    }
  }

  /**
   *
   * @param {Array<string>} ids
   * @param {string} apiVersion
   * @returns {Promise<Array<IUser>>}
   */
  public async authenticateViaFacebook(facebookToken: string, firebaseToken: string): Promise<IFullUser> {
    try {
      return await authenticateViaFacebook(this._originalReq, facebookToken, firebaseToken);
    } catch (e) {
      throw e;
    }
  }

  /**
   *
   * @param {Array<string>} ids
   * @param {string} apiVersion
   * @returns {Promise<Array<IUser>>}
   */
  public async me(): Promise<IFullUser> {
    try {
      return await me(this._originalReq);
    } catch (e) {
      throw e;
    }
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

  /**
   *
   */
  public async getRanking(language: string, rankingReference: string): Promise<IRanking> {
    try {
      return await getRanking(this._originalReq, language, rankingReference);
    } catch (e) {
      throw e;
    }
  }
}
const lexio: Lexio = new Lexio();
export { lexio };

export { IRanking, IRankingItem, IUser, IFullUser, IGame, IAuthenticate, IIdentity, IProfile, LexioRequest};
export { getServiceHost, getAuthenticatedUser, createError, accessControl };
