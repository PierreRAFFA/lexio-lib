import { getAccessToken, getApiVersion, requestGet, requestPost } from "../utils/utils";
import { IAuthenticate, IFullUser, IUser, LexioRequest } from "../index";
import { getServiceHost } from "../serviceRegistry";

/**
 *
 * @param {LexioRequest} req
 * @param {string} facebookToken
 * @param {string} firebaseToken
 * @returns {Promise<IUser>}
 */
export async function authenticateViaFacebook(
  req: LexioRequest| undefined, facebookToken: string, firebaseToken: string): Promise<IFullUser> {

  const apiVersion: string = getApiVersion(req);

  const serviceHost: string = getServiceHost(apiVersion, 'lexio-authentication');
  const uri: string = `${serviceHost}/facebook/token`;

  const options: any = {
    uri,
    headers: {
      'ApiVersion': apiVersion
    },
    json: true, // Automatically parses the JSON string in the response,
    form: {
      access_token: facebookToken,
      firebase_token: firebaseToken,
    }
  };

  return await requestPost<IFullUser>(options);
}

/**
 *
 * @param {LexioRequest} req
 * @param {string} email
 * @param {string} password
 * @returns {Promise<IUser>}
 */
export async function authenticate(req: LexioRequest | undefined, email: string, password: string): Promise<IAuthenticate> {

  const apiVersion: string = getApiVersion(req);

  const serviceHost: string = getServiceHost(apiVersion, 'lexio-authentication');
  const uri: string = `${serviceHost}/api/users/login`;

  const options: any = {
    uri,
    headers: {
      'ApiVersion': apiVersion
    },
    json: true, // Automatically parses the JSON string in the response,
    form: {
      email: email,
      password: password,
    }
  };

  return await requestPost<IAuthenticate>(options);
}
