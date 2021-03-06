"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var CONFIG = {
    '0.1': {
        'lexio-authentication': 'http://lexio-authentication:3010',
        'lexio-user': 'http://lexio-authentication:3010',
        'lexio-game': 'http://lexio-game:3010',
        'lexio-purchase': 'http://lexio-purchase:3010',
        'lexio-notification': 'http://lexio-notification:3010',
        'lexio-social': 'http://lexio-social:3000'
    },
    '1.0': {
        'lexio-authentication': 'http://lexio-authentication:3010',
        'lexio-user': 'http://lexio-authentication:3010',
        'lexio-game': 'http://lexio-game2:3000',
        'lexio-purchase': 'http://lexio-purchase:3010',
        'lexio-notification': 'http://lexio-notification:3010',
        'lexio-social': 'http://lexio-social:3000',
    }
};
function getServiceHost(apiVersion, serviceName) {
    return lodash_1.get(CONFIG, "[" + apiVersion + "][" + serviceName + "]");
}
exports.getServiceHost = getServiceHost;
//# sourceMappingURL=serviceRegistry.js.map