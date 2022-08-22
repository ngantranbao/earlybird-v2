"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastContainer = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const react_transition_group_1 = require("react-transition-group");
const Toast_1 = require("./Toast");
exports.ToastContainer = props => {
    const { placement, toasts, onRemoveToast } = props;
    const reversedToasts = [...toasts].reverse();
    const dismissWrapper = (toast) => (e) => {
        onRemoveToast(toast.id);
        !!toast.onDismiss && toast.onDismiss(e, toast);
    };
    return (react_1.default.createElement("div", { className: classnames_1.default('ds-toast-container', `ds-place-${placement}`) },
        react_1.default.createElement(react_transition_group_1.TransitionGroup, { component: null }, reversedToasts
            .filter(toast => {
            return toast.placement === placement;
        })
            .map(toast => (react_1.default.createElement(react_transition_group_1.CSSTransition, { timeout: 500, classNames: "ds-toast-transition", key: toast.id },
            react_1.default.createElement(Toast_1.Toast, { key: toast.id, intent: toast.intent, title: toast.title, icon: toast.icon, open: true, autoHideDuration: toast.autoHideDuration, className: toast.className, onDismiss: dismissWrapper(toast), userDismissable: toast.userDismissable }, toast.content)))))));
};
