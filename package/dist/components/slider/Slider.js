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
exports.Slider = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const intent_1 = require("../../utils/intent");
const helpers_1 = require("./partials/helpers");
const SliderMark_1 = require("./partials/SliderMark");
const SliderThumbLabel_1 = require("./partials/SliderThumbLabel");
const useOwnerDocument_1 = require("./partials/useOwnerDocument");
const useWidthHeight_1 = require("./partials/useWidthHeight");
exports.Slider = props => {
    // props
    const { defaultValue, value, max = 100, min = 0, step = 1, disabled = false, intent, isAlwaysShowLabel = false, labelValueRender, marks = [], markValueRender, onChangeDone, onChange, className, id, name, } = props;
    const isControlled = value !== undefined;
    // state
    const [isActive, setIsActive] = react_1.useState(false);
    let [currentValue, setCurrentValue] = react_1.useState(defaultValue !== undefined ? defaultValue : min);
    if (isControlled && value !== undefined) {
        // controlled component
        currentValue = value;
    }
    // ref
    const railRef = react_1.useRef(null);
    const startPosition = react_1.useRef(0);
    // calc value for render
    const { width: railWidth } = useWidthHeight_1.useWidthHeight(railRef);
    const { document: ownerDocument } = useOwnerDocument_1.useOwnerDocument(railRef);
    const percent = helpers_1.calcPercentFromValue(currentValue, min, max);
    const percentStyle = {
        thumbStyle: {
            left: `${percent}%`,
        },
        pathStyle: {
            width: `${percent}%`,
        },
    };
    // handler
    const handleChangeValue = (newValue) => {
        const roundedValueByStep = helpers_1.roundValueToStep(newValue, step);
        if (!isControlled) {
            setCurrentValue(roundedValueByStep);
        }
        !!onChange && onChange(roundedValueByStep);
    };
    const handleChangeValueDone = (newValue) => {
        const roundedValueByStep = helpers_1.roundValueToStep(newValue, step);
        if (!isControlled) {
            setCurrentValue(roundedValueByStep);
        }
        !!onChangeDone && onChangeDone(roundedValueByStep);
    };
    const removeDocumentMouseEventListeners = () => {
        ownerDocument.removeEventListener('mousemove', handleMouseMove);
        ownerDocument.removeEventListener('mouseup', handleMouseUp);
    };
    const addDocumentMouseEventListeners = () => {
        ownerDocument.addEventListener('mousemove', handleMouseMove);
        ownerDocument.addEventListener('mouseup', handleMouseUp);
    };
    const handleMouseMove = (event) => {
        event.preventDefault();
        const newPercent = helpers_1.calcPercentFromWidth(event.clientX, startPosition.current, railWidth);
        const newValue = helpers_1.calcValueFromPercent(newPercent, min, max);
        handleChangeValue(newValue);
    };
    const handleMouseUp = (event) => {
        setIsActive(false);
        const newPercent = helpers_1.calcPercentFromWidth(event.clientX, startPosition.current, railWidth);
        const newValue = helpers_1.calcValueFromPercent(newPercent, min, max);
        handleChangeValueDone(newValue);
        removeDocumentMouseEventListeners();
    };
    // WHEN: Handle event when users click on rail of slider
    const handleRailMouseDown = (event) => {
        event.preventDefault();
        setIsActive(true);
        // WHAT: Save start X position of Slider's rail
        // WHY: when handle onMouseMove event of document, we just have offsetX or clientX of pointer from document view
        // WHY: so we save this value for calc offsetX of pointer from Slider view
        startPosition.current = event.clientX - event.nativeEvent.offsetX;
        const newPercent = helpers_1.calcPercentFromWidth(event.clientX, startPosition.current, railWidth);
        const newValue = helpers_1.calcValueFromPercent(newPercent, min, max);
        handleChangeValue(newValue);
        removeDocumentMouseEventListeners();
        addDocumentMouseEventListeners();
    };
    const handleThumbMouseDown = (event) => {
        event.preventDefault();
        setIsActive(true);
        // WHAT: Save start X position of Slider's rail
        // WHY: change formula here because
        // WHY: thumb is big => many point to click => offset is wrong => currentValue still right when we grab thumb => use currentValue
        const exactOffset = (helpers_1.calcPercentFromValue(currentValue, min, max) / 100) * railWidth;
        startPosition.current = event.clientX - exactOffset;
        // WHY: do not update value because users just grab thump => value don't change
        removeDocumentMouseEventListeners();
        addDocumentMouseEventListeners();
    };
    return (react_1.default.createElement("span", { className: classnames_1.default('ds-slider', intent_1.getIntentClassname(intent), {
            disabled,
        }, className) },
        react_1.default.createElement("input", { className: "ds-slider-input", type: "hidden", id: id, name: name, value: currentValue, disabled: disabled }),
        react_1.default.createElement("span", { className: "ds-slider-mask" },
            react_1.default.createElement("span", { className: "ds-slider-rail", ref: railRef, onMouseDown: !disabled ? handleRailMouseDown : undefined }),
            react_1.default.createElement("span", { className: "ds-slider-path", style: percentStyle.pathStyle }),
            react_1.default.createElement("span", { className: classnames_1.default('ds-slider-thumb', { active: isActive }), style: percentStyle.thumbStyle, onMouseDown: !disabled ? handleThumbMouseDown : undefined }),
            marks.map(markValue => {
                return (react_1.default.createElement(SliderMark_1.SliderMark, { key: markValue, value: markValue, percent: helpers_1.calcPercentFromValue(markValue, min, max), markValueRender: markValueRender }));
            }),
            react_1.default.createElement(SliderThumbLabel_1.SliderThumbLabel, { value: currentValue, percent: percent, isAlwaysShowLabel: isAlwaysShowLabel || isActive, labelValueRender: labelValueRender }))));
};
