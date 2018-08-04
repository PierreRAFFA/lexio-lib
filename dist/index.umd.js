(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.lexio = {})));
}(this, (function (exports) { 'use strict';

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

  exports.LATEST_API_VERSION = LATEST_API_VERSION;
  exports.default = Lexio;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
