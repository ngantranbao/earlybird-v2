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
exports.Pagination = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const __1 = require("../..");
const ChevronLeft_1 = require("../../icons/ChevronLeft");
const ChevronRight_1 = require("../../icons/ChevronRight");
var PaginationTypes;
(function (PaginationTypes) {
    PaginationTypes["Input"] = "Input";
    PaginationTypes["FullPage"] = "FullPage";
    PaginationTypes["Single"] = "Single";
})(PaginationTypes || (PaginationTypes = {}));
exports.Pagination = ({ total, limit, currentPage, onChangePage, type = PaginationTypes.FullPage, hasLastFirst, }) => {
    const [selectedPage, setSelectedPage] = react_1.useState(currentPage);
    const totalPage = Math.ceil(total / limit);
    const onClickFirst = () => {
        if (onChangePage) {
            onChangePage(1);
        }
    };
    const onClickLast = () => {
        if (onChangePage) {
            onChangePage(totalPage);
        }
    };
    const onClickChange = (value) => () => {
        if (onChangePage) {
            onChangePage(value);
        }
    };
    const pageDist = totalPage - 1;
    const onChangeInput = (e) => {
        if (!e.target.value || /^\d+$/.test(e.target.value)) {
            setSelectedPage(e.target.value);
        }
    };
    const onKeypress = (e) => {
        if (e.key === 'Enter') {
            const value = selectedPage || currentPage;
            setSelectedPage(Number(value));
            onChangePage(Number(value));
        }
    };
    react_1.useEffect(() => {
        setSelectedPage(currentPage);
    }, [currentPage]);
    return (react_1.default.createElement("div", { className: classnames_1.default('ds-pagination') },
        hasLastFirst && (react_1.default.createElement(__1.Button, { size: __1.Button.sizes.Small, minimal: true, intent: __1.IntentType.Primary, className: "ds-pagination-button-left", onClick: onClickFirst, disabled: currentPage === 1 }, "First")),
        react_1.default.createElement(__1.Button, { className: "ds-pagination-button-left", size: __1.Button.sizes.Small, disabled: currentPage === 1, leftIcon: ChevronLeft_1.ChevronLeftIcon, onClick: onClickChange(currentPage - 1), intent: __1.IntentType.Primary, minimal: true }),
        type === PaginationTypes.Input && (react_1.default.createElement("div", { className: "ds-pagination-info" },
            react_1.default.createElement("input", { className: "ds-input", value: selectedPage, onChange: onChangeInput, onKeyPress: onKeypress }),
            ' ',
            "/ ",
            totalPage)),
        type === PaginationTypes.FullPage && (react_1.default.createElement("span", { className: "ds-pagination-info" },
            currentPage,
            " / ",
            totalPage)),
        type === PaginationTypes.Single &&
            new Array(totalPage).fill(0).map((_el, index) => index === 0 ||
                index === totalPage - 1 ||
                index === currentPage - 1 ||
                (currentPage === 1 && index <= 2) ||
                (currentPage === 1 && index >= totalPage - 3) ||
                (currentPage === totalPage && index <= 2) ||
                (currentPage === totalPage && index >= totalPage - 3) ||
                (currentPage !== 1 && currentPage <= 3 && index + 1 - currentPage >= pageDist - 3) ||
                (currentPage !== totalPage &&
                    currentPage >= totalPage - 2 &&
                    currentPage - index - 1 >= pageDist - 3) ||
                Math.abs(index + 1 - currentPage) === 1 ? (react_1.default.createElement("div", { className: classnames_1.default('ds-pagination-number', { active: currentPage === index + 1 }), key: index, onClick: onClickChange(index + 1) }, index + 1)) : Math.abs(index + 1 - currentPage) === 2 ||
                (currentPage === 1 && index + 1 - currentPage === 3) ||
                (currentPage === totalPage && currentPage - index - 1 === 3) ? (react_1.default.createElement("div", { className: "ds-pagination-separator" }, "...")) : null),
        react_1.default.createElement(__1.Button, { className: "ds-pagination-button-right", leftIcon: ChevronRight_1.ChevronRightIcon, size: __1.Button.sizes.Small, onClick: onClickChange(currentPage + 1), intent: __1.IntentType.Primary, disabled: currentPage === totalPage, minimal: true }),
        hasLastFirst && (react_1.default.createElement(__1.Button, { size: __1.Button.sizes.Small, minimal: true, intent: __1.IntentType.Primary, disabled: currentPage === totalPage, onClick: onClickLast, className: "ds-pagination-button-right" }, "Last"))));
};
exports.Pagination.type = PaginationTypes;
