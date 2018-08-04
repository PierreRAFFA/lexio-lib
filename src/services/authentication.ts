
import { getAccessToken, getApiVersion, requestGet } from "../utils/utils";
import serviceRegistry from "../serviceRegistry";
import { get } from 'lodash';
import { Response } from "request";
import { IUser, Lexio, LexioRequest } from "../index";

/**
 *
 * @param {Array<string>} ids
 * @param {string} apiVersion
 * @returns {Promise<Array<IUser>>}
 */
export async function getUsers(req: LexioRequest | undefined, ids: Array<string>): Promise<Array<IUser>> {

  const apiVersion: string = getApiVersion(req);
  const accessToken: string = getAccessToken(req);

  const serviceHost: string = serviceRegistry.getServiceHost(apiVersion, 'lexio-authentication');

  const filters = {where: {id: {inq: ids}}};

  const uri: string = `${serviceHost}/api/users?access_token=${accessToken}&filters=${JSON.stringify(filters)}`;

  const options = {
    uri,
    qs: {
      access_token: accessToken,
      filters: JSON.stringify(filters),
    },
    headers: {
      'ApiVersion': req
    },
    json: true // Automatically parses the JSON string in the response
  };

  return await requestGet<Array<IUser>>(options);
}

