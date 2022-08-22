"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundValueToStep = exports.calcPercentFromWidth = exports.calcValueFromPercent = exports.calcPercentFromValue = void 0;
const clampPercent = (percent) => {
    if (percent > 100) {
        return 100;
    }
    if (percent < 0) {
        return 0;
    }
    return percent;
};
exports.calcPercentFromValue = (value, min, max) => {
    const percent = Math.abs(((value - min) / (max - min)) * 100);
    return clampPercent(percent);
};
exports.calcValueFromPercent = (percent, min, max) => {
    const validatedPercent = clampPercent(percent);
    return ((max - min) * validatedPercent) / 100 + min;
};
// WHAT: function recive clientX of pointer, start positionX of slider, width of slider => percents
exports.calcPercentFromWidth = (clientX, startPosition, sliderWidth) => {
    const percent = ((clientX - startPosition) / sliderWidth) * 100;
    return clampPercent(percent);
};
exports.roundValueToStep = (value, step) => {
    if (typeof step === 'number') {
        return Math.round(value / step) * step;
    }
    return value;
};
