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
exports.Tooltip = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const Popover_1 = require("../popover/Popover");
exports.Tooltip = props => {
    const { content, placement = 'top', children, interactive, enterDelay, leaveDelay, usePortal, portalContainer, className, popoverClassName, } = props;
    let [isOpen, setIsOpen] = react_1.useState(false);
    const [target, setTarget] = react_1.useState(null);
    const [isInteracting, setIsInteracting] = react_1.useState(false);
    const isControlled = props.isOpen !== undefined;
    if (isControlled) {
        isOpen = props.isOpen || false;
    }
    const closePopover = () => {
        if (props.onClose) {
            props.onClose();
        }
        setIsOpen(false);
    };
    react_1.useEffect(() => {
        if (target === null) {
            return;
        }
        const onMouseEnter = () => {
            setIsOpen(true);
        };
        const onMouseLeave = () => {
            closePopover();
        };
        target.addEventListener('mouseenter', onMouseEnter);
        target.addEventListener('mouseleave', onMouseLeave);
        return () => {
            target.removeEventListener('mouseenter', onMouseEnter);
            target.removeEventListener('mouseleave', onMouseLeave);
        };
    }, [target]);
    const onMouseOverContent = () => {
        if (interactive) {
            setIsInteracting(true);
        }
    };
    const onMouseLeaveContent = () => {
        setIsInteracting(false);
        closePopover();
    };
    return (react_1.default.createElement(Popover_1.Popover, { placement: placement, popoverClassName: classnames_1.default('ds-tooltip', popoverClassName), isOpen: isInteracting || isOpen, targetRef: setTarget, leaveDelay: leaveDelay, enterDelay: enterDelay, usePortal: usePortal, portalContainer: portalContainer, content: react_1.default.createElement("div", { onMouseOver: onMouseOverContent, onMouseLeave: onMouseLeaveContent, className: classnames_1.default('ds-tooltip-content', className) }, content) }, children));
};
