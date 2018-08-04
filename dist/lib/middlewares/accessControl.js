'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var utils_1 = require("../utils/utils");
/**
 * Populates the request by setting the user.
 * This user can be retrieved from the next middlewares or the remote methods
 *
 */
function accessControl(req, res, next) {
    console.log('accessControl');
    var token = getJWTToken(req);
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
            if (err) {
                next(utils_1.error(err.message, 500));
            }
            else {
                req.user = user;
                next();
            }
        });
    }
    else {
        next(utils_1.error('Not Authorized', 401));
    }
}
exports.accessControl = accessControl;
/**
 * Returns the token from the Authorization header
 *
 * @param {LexioRequest} req
 * @returns {string}
 */
function getJWTToken(req) {
    var token = (req.headers.Authorization || req.headers.authorization);
    if (token) {
        var split = token.split(' ');
        if (split.length === 2) {
            token = split[1];
        }
    }
    return token;
}
//# sourceMappingURL=accessControl.js.map