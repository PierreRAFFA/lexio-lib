import { get } from 'lodash';
// import * as request from "request";
import { LexioError, LexioRequest } from "../index";

const LATEST_API_VERSION = '1.0';

export function error(message: string, statusCode: number) {
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
  return get(req, 'headers.apiversion') as string || LATEST_API_VERSION;
}

/**
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

// /**
//  *
//  * @param options
//  * @returns {Promise<T>}
//  */
// export async function requestGet<T>(options: any): Promise<T> {
//   return new Promise<T>(async (resolve, reject) => {
//     return request.get(options, (error: any, response: request.Response, body: any): void => {
//       const statusCode = get(response, 'statusCode') || 500;
//       if (error) {
//         reject(error);
//       } else {
//         try {
//           const result: T = JSON.parse(body);
//           resolve(result);
//         } catch (parsingError) {
//           reject(parsingError);
//         }
//       }
//     });
//   });
// }
