"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importDefault(require("react"));
const FilledPerson_1 = require("../../icons/FilledPerson");
const useIsErrorImg_1 = require("./useIsErrorImg");
var AvatarSize;
(function (AvatarSize) {
    AvatarSize["Small"] = "small";
    AvatarSize["Medium"] = "medium";
    AvatarSize["Large"] = "large";
})(AvatarSize || (AvatarSize = {}));
const getInitialLetters = (name) => {
    const words = name.split(' ');
    let initials = words[0].substring(0, 1).toUpperCase();
    if (words.length > 1) {
        initials += words[words.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};
exports.Avatar = props => {
    const { icon: Icon, className, name, size = AvatarSize.Medium, color, src, srcSet, alt } = props;
    const isErrorImg = useIsErrorImg_1.useIsErrorImg(src, srcSet);
    const hasImg = (src || srcSet) && !isErrorImg;
    const colorStyle = color ? { color, fill: 'currentColor' } : { fill: 'currentColor' };
    const renderAvatarPresent = () => {
        if (hasImg) {
            return react_1.default.createElement("img", { alt: alt, src: src, srcSet: srcSet, className: "ds-avatar-img" });
        }
        if (name) {
            const initials = getInitialLetters(name);
            return (react_1.default.createElement("span", { className: "ds-avatar-name", style: colorStyle }, initials));
        }
        else if (Icon) {
            return react_1.default.createElement(Icon, { className: "ds-avatar-icon", style: colorStyle });
        }
        else {
            return react_1.default.createElement(FilledPerson_1.FilledPersonIcon, { className: "ds-avatar-icon", style: colorStyle });
        }
    };
    return react_1.default.createElement("div", { className: classnames_1.default('ds-avatar', size, className) }, renderAvatarPresent());
};
exports.Avatar.sizes = AvatarSize;
