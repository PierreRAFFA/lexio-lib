
import { getAccessToken, getApiVersion, requestPost } from "../utils/utils";
import { IGame, IUser, LexioRequest } from "../index";
import { getServiceHost } from "../serviceRegistry";

/**
 *
 * @param {Array<string>} ids
 * @param {string} apiVersion
 * @returns {Promise<Array<IUser>>}
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

