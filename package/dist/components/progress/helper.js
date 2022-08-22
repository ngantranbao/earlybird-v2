"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcPercentFromValue = void 0;
exports.calcPercentFromValue = (value, max) => {
    if (!value || !max) {
        return undefined;
    }
    const percent = Math.abs((value / max) * 100);
    if (percent > 100) {
        return 100;
    }
    if (percent < 0) {
        return 0;
    }
    return percent;
};
