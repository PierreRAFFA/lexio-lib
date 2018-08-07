
import {
  getAccessToken,
  getApiVersion,
  getRawAuthorization,
  requestGet,
  requestPost
} from "../utils/utils";
import { IGame, IRanking, LexioRequest } from "../index";
import { getServiceHost } from "../serviceRegistry";

/**
 *
 * @param {LexioRequest | undefined} req
 * @param {IGame} game
 * @returns {Promise<IGame>}
 */
export async function postGame(req: LexioRequest | undefined, game: IGame): Promise<IGame> {

  const apiVersion: string = getApiVersion(req);
  const accessToken: string = getAccessToken(req);

  const serviceHost: string = getServiceHost(apiVersion, 'lexio-game');

  const uri: string = `${serviceHost}/api/games`;

  const options = {
    uri,
    qs: {
      access_token: accessToken,
    },
    headers: {
      'ApiVersion': apiVersion
    },
    json: true // Automatically parses the JSON string in the response
  };

  return await requestPost<IGame>(options);
}

/**
 *
 * @param {LexioRequest | undefined} req
 * @param {IGame} game
 * @returns {Promise<IGame>}
 */
export async function getRanking(req: LexioRequest | undefined, language: string, rankingReference: string): Promise<IRanking> {

  const apiVersion: string = getApiVersion(req);
  const authorization: string = getRawAuthorization(req);
  const serviceHost: string = getServiceHost(apiVersion, 'lexio-game');

  const uri: string = `${serviceHost}/api/rankings/${language}/${rankingReference}`;

  const options = {
    uri,
    headers: {
      'ApiVersion': apiVersion,
      'Authorization': authorization,
    },
    json: true // Automatically parses the JSON string in the response
  };

  return await requestGet<IRanking>(options);
}

