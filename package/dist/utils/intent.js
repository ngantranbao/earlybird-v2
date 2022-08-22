"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntentClassname = exports.isIntentDefined = void 0;
const types_1 = require("../commons/types");
exports.isIntentDefined = (colorOrIntent) => {
    if (colorOrIntent !== undefined) {
        return Object.values(types_1.IntentType).indexOf(colorOrIntent) >= 0;
    }
    else {
        return false;
    }
};
exports.getIntentClassname = (intent) => {
    if (exports.isIntentDefined(intent)) {
        return `intent-${intent}`;
    }
    else {
        return undefined;
    }
};
