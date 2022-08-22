"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToast = void 0;
const react_1 = require("react");
const types_1 = require("../../commons/types");
const FilledAlertCircle_1 = require("../../icons/FilledAlertCircle");
const FilledCircleTick_1 = require("../../icons/FilledCircleTick");
const FilledCrossCircle_1 = require("../../icons/FilledCrossCircle");
const FilledInfo_1 = require("../../icons/FilledInfo");
const ToastContext_1 = require("./ToastContext");
exports.useToast = () => {
    const context = react_1.useContext(ToastContext_1.ToastContext);
    if (!context) {
        throw Error('`useToast` hook must be called from a descendent of the `ToastProvider`.');
    }
    const { showToast } = context;
    const showBasic = (content, option = {}) => {
        const messageOption = Object.assign(Object.assign({ icon: FilledInfo_1.FilledInfoIcon }, option), { intent: undefined });
        showToast(content, messageOption);
    };
    const showInfo = (content, option = {}) => {
        const messageOption = Object.assign(Object.assign({ icon: FilledInfo_1.FilledInfoIcon }, option), { intent: types_1.IntentType.Primary });
        showToast(content, messageOption);
    };
    const showSuccess = (content, option = {}) => {
        const messageOption = Object.assign(Object.assign({ icon: FilledCircleTick_1.FilledCircleTickIcon }, option), { intent: types_1.IntentType.Success });
        showToast(content, messageOption);
    };
    const showDanger = (content, option = {}) => {
        const messageOption = Object.assign(Object.assign({ icon: FilledCrossCircle_1.FilledCrossCircleIcon }, option), { intent: types_1.IntentType.Danger });
        showToast(content, messageOption);
    };
    const showWarning = (content, option = {}) => {
        const messageOption = Object.assign(Object.assign({ icon: FilledAlertCircle_1.FilledAlertCircleIcon }, option), { intent: types_1.IntentType.Warning });
        showToast(content, messageOption);
    };
    return Object.assign(Object.assign({}, context), { showBasic,
        showInfo,
        showSuccess,
        showDanger,
        showWarning });
};
