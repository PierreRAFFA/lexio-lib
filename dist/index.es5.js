var LATEST_API_VERSION = '5.0';
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
var lexio = new Lexio();

export default Lexio;
export { LATEST_API_VERSION, lexio };
//# sourceMappingURL=index.es5.js.map
