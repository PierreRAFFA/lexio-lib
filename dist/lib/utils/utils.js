"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var LATEST_API_VERSION = '1.0';
function error(message, statusCode) {
    var error = new Error(message);
    error.statusCode = statusCode;
    return error;
}
exports.error = error;
/**
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
function getApiVersion(req) {
    return lodash_1.get(req, 'headers.apiversion') || LATEST_API_VERSION;
}
exports.getApiVersion = getApiVersion;
/**
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
function getAccessToken(req) {
    return lodash_1.get(req, 'user.accessToken');
}
exports.getAccessToken = getAccessToken;
/**
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
function getJwt(req) {
    var token = (req.headers.Authorization || req.headers.authorization);
    if (token) {
        var split = token.split(' ');
        if (split.length === 2) {
            token = split[1];
        }
    }
    return token;
}
exports.getJwt = getJwt;
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
//# sourceMappingURL=utils.js.map