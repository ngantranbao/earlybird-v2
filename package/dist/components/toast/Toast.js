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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toast = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const Cross_1 = require("../../icons/Cross");
const intent_1 = require("../../utils/intent");
// TODO: implement resume and pause autoDismissDuration when hover Toast
exports.Toast = props => {
    const { children, intent, title, icon: Icon, open = false, autoHideDuration, className, onDismiss, userDismissable = true, } = props;
    const intentClass = intent_1.getIntentClassname(intent);
    const handleClose = () => {
        if (!!onDismiss) {
            onDismiss();
        }
    };
    const dismissRef = react_1.useRef();
    dismissRef.current = onDismiss;
    react_1.useEffect(() => {
        if (!open || !onDismiss || !autoHideDuration) {
            return;
        }
        const idTimer = setTimeout(() => dismissRef.current && dismissRef.current(), autoHideDuration);
        return () => clearTimeout(idTimer);
    }, [open, autoHideDuration]);
    if (!open) {
        return null;
    }
    return (react_1.default.createElement("div", { className: classnames_1.default('ds-toast', intentClass, className) },
        Icon && react_1.default.createElement(Icon, { size: 40, className: "ds-toast-icon" }),
        react_1.default.createElement("div", { className: "ds-toast-content" },
            title && react_1.default.createElement("div", { className: "ds-toast-title" }, title),
            children),
        userDismissable && (react_1.default.createElement("span", { onClick: handleClose, className: "ds-toast-close" },
            react_1.default.createElement(Cross_1.CrossIcon, { size: 24, className: "ds-toast-close-icon" })))));
};
