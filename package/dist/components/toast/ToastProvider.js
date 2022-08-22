"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastProvider = void 0;
const react_1 = __importStar(require("react"));
const react_dom_1 = require("react-dom");
const generateUEID_1 = require("../../utils/generateUEID");
const ToastContainer_1 = require("./ToastContainer");
const ToastContext_1 = require("./ToastContext");
const toastTypes_1 = require("./toastTypes");
const canUseDOM = !!(typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement);
exports.ToastProvider = props => {
    const { children, placement = toastTypes_1.ToastPlacement.TopCenter, defaultAutoHideDuration = 5000, maxActiveToast = 3, } = props;
    const [toasts, setToasts] = react_1.useState([]);
    const showToast = (content, option = {}) => {
        const id = generateUEID_1.generateUEID();
        const { autoHideDuration = defaultAutoHideDuration } = option, otherOption = __rest(option, ["autoHideDuration"]);
        const newToast = Object.assign({ id,
            content,
            placement,
            autoHideDuration }, otherOption);
        if (toasts.length < maxActiveToast) {
            setToasts([...toasts, newToast]);
        }
        else {
            const removedElement = toasts.shift();
            if (!!(removedElement === null || removedElement === void 0 ? void 0 : removedElement.onDismiss)) {
                removedElement.onDismiss();
            }
            setToasts([...toasts, newToast]);
        }
    };
    const removeToast = (id) => {
        const newToasts = toasts.filter((toast) => toast.id !== id);
        setToasts(newToasts);
    };
    const handleRemoveToast = (id) => {
        removeToast(id);
    };
    const providerValue = {
        showToast,
        removeToast,
    };
    return (react_1.default.createElement(ToastContext_1.ToastContext.Provider, { value: providerValue },
        children,
        canUseDOM &&
            react_dom_1.createPortal(react_1.default.createElement(ToastContainer_1.ToastContainer, { key: `toast-container`, placement: placement, toasts: toasts, onRemoveToast: handleRemoveToast }), document.body)));
};
