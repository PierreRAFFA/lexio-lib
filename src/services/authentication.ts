
import { getApiVersion } from "../utils/utils";
import { IUser, LexioRequest } from "../index";
// import { getServiceHost } from "../serviceRegistry";

/**
 *
 * @param {Array<string>} ids
 * @param {string} apiVersion
 * @returns {Promise<Array<IUser>>}
 */
export async function getUsers(req: LexioRequest | undefined, ids: Array<string>): Promise<Array<IUser>> {


  const apiVersion: string = getApiVersion(req);
  // const accessToken: string = getAccessToken(req);
  return [];
  //
  // const serviceHost: string = getServiceHost(apiVersion, 'lexio-authentication');
  //
  // const filters = {where: {id: {inq: ids}}};
  //
  // const uri: string = `${serviceHost}/api/users?access_token=${accessToken}&filters=${JSON.stringify(filters)}`;
  //
  // const options = {
  //   uri,
  //   qs: {
  //     access_token: accessToken,
  //     filters: JSON.stringify(filters),
  //   },
  //   headers: {
  //     'ApiVersion': req
  //   },
  //   json: true // Automatically parses the JSON string in the response
  // };
  //
  // return await requestGet<Array<IUser>>(options);
}

