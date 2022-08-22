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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dialog = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const Cross_1 = require("../../icons/Cross");
const Overlay_1 = require("../overlay/Overlay");
const DialogHeader_1 = require("./DialogHeader");
exports.Dialog = props => {
    const { className, style, isOpen, onClose, isCloseButtonShown = true, canClickOutsideClose = true, canEscapeKeyClose = true, autoFocus = true, usePortal, portalContainer, withBackdrop = true, backdrop, children, title, } = props;
    const contentRef = react_1.useRef(null);
    const [contentStyles, setContentStyles] = react_1.useState();
    react_1.useEffect(() => {
        if (contentRef.current === null) {
            return;
        }
        if (contentRef.current.offsetHeight < window.innerHeight - 148) {
            setContentStyles({ transform: 'translateY(120px)' });
        }
        else {
            setContentStyles(undefined);
        }
    }, [isOpen]);
    react_1.useEffect(() => {
        if (isOpen === true) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);
    return (react_1.default.createElement(Overlay_1.Overlay, { isOpen: isOpen, onClose: onClose, usePortal: usePortal, portalContainer: portalContainer, backdrop: backdrop, withBackdrop: withBackdrop, canClickOutsideClose: canClickOutsideClose, canEscapeKeyClose: canEscapeKeyClose, autoFocus: autoFocus },
        react_1.default.createElement("div", { className: classnames_1.default('ds-dialog', className), ref: contentRef, style: Object.assign(Object.assign({}, contentStyles), style) },
            isCloseButtonShown && (react_1.default.createElement("div", { className: "ds-dialog-close-icon", onClick: onClose },
                react_1.default.createElement(Cross_1.CrossIcon, { size: 24 }))),
            title && react_1.default.createElement(DialogHeader_1.DialogHeader, null, title),
            children)));
};
__exportStar(require("./DialogHeader"), exports);
__exportStar(require("./DialogBody"), exports);
__exportStar(require("./DialogDivider"), exports);
__exportStar(require("./DialogFooter"), exports);
