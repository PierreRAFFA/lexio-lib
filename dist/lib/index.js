"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LATEST_API_VERSION = '5.0';
var Lexio = /** @class */ (function () {
    function Lexio() {
        /**
         *
         */
        this._originalReq = undefined;
    }
    /**
     *
     * @param {LexioRequest} req
     */
    Lexio.prototype.fromReq = function (req) {
        this._originalReq = req;
        return this;
    };
    return Lexio;
}());
exports.default = Lexio;
//# sourceMappingURL=index.js.map