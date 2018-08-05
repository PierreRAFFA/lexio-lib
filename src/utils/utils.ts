import { get } from 'lodash';
import * as request from "request";
import { IFullUser, IUser, LATEST_API_VERSION, LexioError, LexioRequest } from "../index";
import { Response } from "request";

export function createError(message: string, statusCode: number) {
  const error: LexioError = new Error(message) as LexioError;
  error.statusCode = statusCode;
  return error;
}

/**
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
export function getApiVersion(req: LexioRequest | undefined): string {
  return get(req, 'headers.apiversion') || LATEST_API_VERSION;
}

/**
 * Returns the access_token send by the client
 *
 * user.accessToken added by the authenticate middleware of the gateway
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
export function getAccessToken(req: LexioRequest | undefined): string {
  return get(req, 'user.accessToken') as string;
}

/**
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
export function getJwt(req: LexioRequest): string {
  let token: string = (req.headers.Authorization || req.headers.authorization) as string;
  if (token) {
    const split: Array<string> = token.split(' ');

    if (split.length === 2) {
      token = split[1];
    }
  }

  return token;
}

/**
 * Returns the access_token send by the client
 *
 * user.accessToken added by the authenticate middleware of the gateway
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
export function getAuthenticatedUser(req: LexioRequest | undefined): IFullUser {
  return get(req, 'user') as IFullUser;
}

/**
 *
 * @param options
 * @returns {Promise<T>}
 */
export async function requestGet<T>(options: any): Promise<T> {
  return new Promise<T>(async (resolve, reject) => {
    return request.get(options, (error: any, response: Response, body: T): void => {
      console.log('requestGet');
      console.dir(options, {depth: undefined});
      // console.log(error);
      // console.log(body);
      // console.log(response);

      //weird, 401 returns successful with error set to null
      if (error || (response && response.statusCode >= 400)) {

        const message: string = get(error, 'message') || response.body.error.message;

        console.log(response.statusCode);
        console.log(response.statusMessage);
        reject(createError(message, response.statusCode || 500));
      } else {
        try {
          resolve(body);
        } catch (parsingError) {
          console.error(body);
          reject(parsingError);
        }
      }
    });
  });
}

/**
 *
 * @param options
 * @returns {Promise<T>}
 */
export async function requestPost<T>(options: any): Promise<T> {
  return new Promise<T>(async (resolve, reject) => {
    return request.post(options, (error: any, response: Response, body: T): void => {

      console.log('requestPost');
      // console.dir(options, {depth: undefined});
      // console.log(error);
      // console.log(body);

      //weird, 401 returns successful with error set to null
      if (error || (response && response.statusCode >= 400)) {

        const message: string = get(error, 'message') || response.body.error.message;

        console.log(response.statusCode);
        console.log(response.statusMessage);
        reject(createError(message, response.statusCode || 500));
      } else {
        try {
          resolve(body);
        } catch (parsingError) {
          console.error(body);
          reject(parsingError);
        }
      }
    });
  });
}
