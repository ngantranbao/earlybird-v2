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
exports.Tabs = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const Tab_1 = require("./Tab");
exports.Tabs = props => {
    var _a;
    const { onChange, children, activeTabId: activeTabIdProps, defaultTabId: defaultTabIdProps, vertical, fixedTabWidth, } = props;
    const tabs = react_1.default.Children.toArray(children).filter(Tab_1.isTabElement);
    const enableTabs = tabs.filter(tab => !tab.props.disabled);
    const firstEnableTabId = enableTabs[0] ? enableTabs[0].props.id : undefined;
    const defaultTabId = onChange && activeTabIdProps ? activeTabIdProps : defaultTabIdProps || firstEnableTabId;
    let [activeTabId, setActiveTabId] = react_1.useState(defaultTabId);
    activeTabId = onChange && activeTabIdProps ? activeTabIdProps : activeTabId;
    const tabWidthStyle = fixedTabWidth ? { width: fixedTabWidth } : {};
    // WHY: Sliding underline style for selected Tab
    const [underlineStyle, setUnderlineStyle] = react_1.useState();
    const activeLIRef = react_1.useRef(null);
    react_1.useEffect(() => {
        const activeLIElement = activeLIRef.current;
        if (activeLIElement) {
            const newUnderlineStyle = !vertical
                ? {
                    left: activeLIElement.offsetLeft,
                    width: activeLIElement.offsetWidth,
                }
                : {
                    top: activeLIElement.offsetTop,
                    height: activeLIElement.offsetHeight,
                };
            setUnderlineStyle(newUnderlineStyle);
        }
    }, [activeTabId]);
    const onClickTab = (tabId) => (event) => {
        event.preventDefault();
        if (onChange && props.activeTabId) {
            onChange(tabId);
        }
        else {
            setActiveTabId(tabId);
        }
    };
    return (react_1.default.createElement("div", { className: classnames_1.default('ds-tabs', {
            vertical: vertical === true,
        }) },
        react_1.default.createElement("div", { className: "ds-tabs-bar-container" },
            react_1.default.createElement("ul", { className: "ds-tab-list", role: "tablist" }, tabs.map(({ props }) => (react_1.default.createElement("li", { ref: props.id === activeTabId ? activeLIRef : null, tabIndex: 0, key: props.id, onClick: props.disabled !== true ? onClickTab(props.id) : undefined, title: props.title, className: classnames_1.default('ds-tab', {
                    active: props.id === activeTabId,
                    disabled: props.disabled === true,
                }), style: tabWidthStyle }, props.title)))),
            react_1.default.createElement("div", { className: "ds-tab-active-underline", style: underlineStyle })),
        react_1.default.createElement("div", null, (_a = enableTabs.find(tab => tab.props.id === activeTabId)) === null || _a === void 0 ? void 0 : _a.props.children)));
};
