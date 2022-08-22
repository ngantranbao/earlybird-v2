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
exports.Overlay = exports.WithClickOutside = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const react_dom_1 = require("react-dom");
const react_onclickoutside_1 = __importDefault(require("react-onclickoutside"));
const react_transition_group_1 = require("react-transition-group");
const dom_1 = require("../../utils/dom");
const WithClickOutsideComponent = props => {
    WithClickOutsideComponent.onClickOutside = props.onClickOutside;
    return react_1.default.createElement(react_1.default.Fragment, null, props.children);
};
WithClickOutsideComponent.prototype = {};
exports.WithClickOutside = react_onclickoutside_1.default(WithClickOutsideComponent, {
    handleClickOutside: () => WithClickOutsideComponent.onClickOutside,
});
exports.Overlay = props => {
    const { onClose, isOpen, backdrop, autoFocus = false, withBackdrop = false, portalContainer = dom_1.isDocDefined ? document.body : null, usePortal = true, children, canClickOutsideClose, canEscapeKeyClose, } = props;
    const overlayContainerRef = react_1.useRef(null);
    const onClickOutsideContent = () => {
        if (canClickOutsideClose && onClose) {
            onClose();
        }
    };
    const handleKeyDown = (event) => {
        if (event.which === 27 && canEscapeKeyClose === true && onClose) {
            event.preventDefault();
            onClose();
        }
    };
    const focusOnOverlay = () => {
        if (overlayContainerRef.current === null) {
            return;
        }
        const element = react_dom_1.findDOMNode(overlayContainerRef.current);
        if (element === null) {
            return;
        }
        if (element.contains(document.activeElement)) {
            return;
        }
        element.focus();
    };
    react_1.useEffect(() => {
        if (autoFocus === true) {
            focusOnOverlay();
        }
    }, [isOpen]);
    const renderContent = () => {
        const contents = [];
        if (withBackdrop === true) {
            contents.push(react_1.default.createElement(react_transition_group_1.CSSTransition, { key: "backdrop", timeout: 200, className: "ds-overlay-backdrop" },
                react_1.default.createElement("div", { className: "ds-overlay-backdrop" }, backdrop ? backdrop : react_1.default.createElement("div", { className: "ds-backdrop" }))));
        }
        contents.push(react_1.default.createElement(react_transition_group_1.CSSTransition, { key: "content", timeout: 200, className: "ds-overlay-content" },
            react_1.default.createElement(exports.WithClickOutside, { onClickOutside: onClickOutsideContent },
                react_1.default.createElement("div", { className: "ds-overlay-content" }, children))));
        return (react_1.default.createElement(react_transition_group_1.TransitionGroup, { className: classnames_1.default('ds-overlay-container', { 'ds-inline': usePortal === false }), style: { pointerEvents: isOpen ? 'auto' : 'none' }, onKeyDown: handleKeyDown, tabIndex: canClickOutsideClose || canEscapeKeyClose ? 0 : undefined, component: "div", timeout: 200, appear: true, ref: overlayContainerRef }, isOpen === true ? contents : []));
    };
    if (usePortal === true && portalContainer === null) {
        return null;
    }
    else if (usePortal === true && portalContainer !== null) {
        return react_dom_1.createPortal(renderContent(), portalContainer);
    }
    else {
        return renderContent();
    }
};
