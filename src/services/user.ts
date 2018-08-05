import { get } from 'lodash';
import { getAccessToken, getApiVersion, requestGet } from "../utils/utils";
import { IFullUser, IUser, LexioRequest } from "../index";
import { getServiceHost } from "../serviceRegistry";
/**
 *
 * @param {Array<string>} ids
 * @param {string} apiVersion
 * @returns {Promise<Array<IUser>>}
 */
export async function me(req: LexioRequest | undefined): Promise<IFullUser> {
  console.log('me');
  const apiVersion: string = getApiVersion(req);
  const accessToken: string = get(req, 'headers.authorization'); //get(req, 'query.access_token');
  console.log(accessToken);
  const serviceHost: string = getServiceHost(apiVersion, 'lexio-user');

  const uri: string = `${serviceHost}/api/users/me`;

  const options = {
    uri,
    qs: {
      access_token: accessToken,
    },
    headers: {
      'ApiVersion': apiVersion,
      "authorization": accessToken
    },
    json: true // Automatically parses the JSON string in the response
  };

  try {
    return await requestGet<IFullUser>(options);
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
export async function getUsers(req: LexioRequest | undefined, ids: Array<string>): Promise<Array<IUser>> {

  const apiVersion: string = getApiVersion(req);
  const accessToken: string = getAccessToken(req);

  const serviceHost: string = getServiceHost(apiVersion, 'lexio-user');

  const filters = {where: {id: {inq: ids}}};

  const uri: string = `${serviceHost}/api/users`;

  const options = {
    uri,
    qs: {
      access_token: accessToken,
      filters: JSON.stringify(filters),
    },
    headers: {
      'ApiVersion': apiVersion
    },
    json: true // Automatically parses the JSON string in the response
  };

  return await requestGet<Array<IUser>>(options);
}

