import { get } from 'lodash';
import * as request from "request";
import { LATEST_API_VERSION, LexioError, LexioRequest } from "../index";
import { Response } from "request";

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

/**
 *
 * @param options
 * @returns {Promise<T>}
 */
export async function requestGet<T>(options: any): Promise<T> {
  return new Promise<T>(async (resolve, reject) => {
    return request.get(options, (error: any, response: Response, body: T): void => {
      if (error) {
        reject(error);
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
      if (error) {
        reject(error);
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
