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
exports.Popover = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const react_dom_1 = require("react-dom");
const react_popper_1 = require("react-popper");
const react_transition_group_1 = require("react-transition-group");
const dom_1 = require("../../utils/dom");
const Overlay_1 = require("../overlay/Overlay");
exports.Popover = props => {
    const { isOpen, autoFocus, usePortal = true, portalContainer = dom_1.isDocDefined ? document.body : null, placement = 'auto', content, children, onClose, popoverClassName, boundary = 'clippingParents', canClickOutsideClose: closeOnClickOutsideContent, canEscapeKeyClose, targetRef, enterDelay = 0, leaveDelay = 0, } = props;
    const [targetBox, setTargetBox] = react_1.useState(null);
    const [contentBox, setContentBox] = react_1.useState(null);
    const [timeout, setTimeout] = react_1.useState(0);
    react_1.useEffect(() => {
        if (targetBox !== null && targetRef !== undefined) {
            targetRef(targetBox);
        }
    }, [targetBox]);
    const { styles, attributes } = react_popper_1.usePopper(targetBox, contentBox, {
        placement,
        modifiers: [
            { name: 'flip', options: { boundary } },
            { name: 'offset', options: { offset: [0, 4] } },
            { name: 'preventOverflow', options: { boundary } },
        ],
    });
    react_1.useEffect(() => {
        if (isOpen === true && autoFocus === true && contentBox !== null) {
            contentBox.focus({ preventScroll: true });
        }
    }, [isOpen, contentBox]);
    const handleKeyDown = event => {
        if (event.which === 27 && canEscapeKeyClose === true && onClose) {
            event.preventDefault();
            onClose();
        }
    };
    const onClickOutsideContent = () => {
        if (closeOnClickOutsideContent === true) {
            onClose && onClose();
        }
    };
    const renderContent = () => {
        const isInteractive = autoFocus === true || canEscapeKeyClose === true;
        const contentChild = (react_1.default.createElement(react_transition_group_1.CSSTransition, { in: isOpen, classNames: "ds-popover-content-transition", key: "target", timeout: (timeout || 0) + 200, onEnter: () => setTimeout(enterDelay), onEntered: () => setTimeout(leaveDelay), unmountOnExit: true },
            react_1.default.createElement(Overlay_1.WithClickOutside, { onClickOutside: onClickOutsideContent },
                react_1.default.createElement("div", Object.assign({ className: classnames_1.default('ds-popover-content', popoverClassName), tabIndex: isInteractive ? 0 : undefined, onKeyDown: handleKeyDown, ref: setContentBox, style: Object.assign(Object.assign({}, styles.popper), { transitionDelay: `${timeout}ms` }) }, attributes.popper), content))));
        if (usePortal === true && portalContainer !== null) {
            return react_dom_1.createPortal(contentChild, portalContainer);
        }
        else {
            return contentChild;
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("span", { ref: setTargetBox, style: { maxWidth: 'max-content', display: 'inline-block' } }, children),
        renderContent()));
};
