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
exports.RangeSlider = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const intent_1 = require("../../utils/intent");
const helpers_1 = require("./partials/helpers");
const SliderMark_1 = require("./partials/SliderMark");
const SliderThumbLabel_1 = require("./partials/SliderThumbLabel");
const useOwnerDocument_1 = require("./partials/useOwnerDocument");
const useWidthHeight_1 = require("./partials/useWidthHeight");
exports.RangeSlider = props => {
    // props
    const { defaultValue, value, max = 100, min = 0, step = 1, disabled = false, intent, isAlwaysShowLabel = false, labelValueRender, marks = [], markValueRender, onChangeDone, onChange, className, id, name, } = props;
    const isControlled = value !== undefined;
    // state
    const [isActive, setIsActive] = react_1.useState(false);
    let [currentValue, setCurrentValue] = react_1.useState(defaultValue ? defaultValue : [min, min]);
    if (isControlled && value !== undefined) {
        // controlled component
        currentValue = value;
    }
    // ref
    const railRef = react_1.useRef(null);
    const startPosition = react_1.useRef(0);
    const chossenThumb = react_1.useRef();
    // calc value for render
    const { width: railWidth } = useWidthHeight_1.useWidthHeight(railRef);
    const { document: ownerDocument } = useOwnerDocument_1.useOwnerDocument(railRef);
    const percent = [
        helpers_1.calcPercentFromValue(currentValue[0], min, max),
        helpers_1.calcPercentFromValue(currentValue[1], min, max),
    ];
    const percentStyle = {
        thumbStyle: [
            {
                left: `${percent[0]}%`,
            },
            {
                left: `${percent[1]}%`,
            },
        ],
        pathStyle: {
            left: `${percent[0]}%`,
            width: `${percent[1] - percent[0]}%`,
        },
    };
    const validatePairValue = (pairValue) => {
        let validatedPairValue;
        if (pairValue[0] > pairValue[1]) {
            validatedPairValue = [
                helpers_1.roundValueToStep(pairValue[1], step),
                helpers_1.roundValueToStep(pairValue[0], step),
            ];
        }
        else {
            validatedPairValue = [
                helpers_1.roundValueToStep(pairValue[0], step),
                helpers_1.roundValueToStep(pairValue[1], step),
            ];
        }
        return validatedPairValue;
    };
    // handler
    const handleChangeValue = (newPairValue) => {
        const validatedPairValue = validatePairValue(newPairValue);
        if (!isControlled) {
            setCurrentValue(validatedPairValue);
        }
        !!onChange && onChange(validatedPairValue);
    };
    const handleChangeValueDone = (newPairValue) => {
        const validatedPairValue = validatePairValue(newPairValue);
        if (!isControlled) {
            setCurrentValue(validatedPairValue);
        }
        !!onChangeDone && onChangeDone(validatedPairValue);
        chossenThumb.current = undefined;
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
        const newPairValue = [...currentValue];
        if (chossenThumb.current !== undefined) {
            newPairValue[chossenThumb.current] = newValue;
        }
        handleChangeValue(newPairValue);
    };
    const handleMouseUp = (event) => {
        setIsActive(false);
        const newPercent = helpers_1.calcPercentFromWidth(event.clientX, startPosition.current, railWidth);
        const newValue = helpers_1.calcValueFromPercent(newPercent, min, max);
        const newPairValue = [...currentValue];
        if (chossenThumb.current !== undefined) {
            newPairValue[chossenThumb.current] = newValue;
        }
        handleChangeValueDone(newPairValue);
        removeDocumentMouseEventListeners();
    };
    const handleRailMouseDown = (event) => {
        event.preventDefault();
        if (disabled) {
            return;
        }
        setIsActive(true);
        // WHAT: Save start X position of Slider's rail
        // WHY: when handle onMouseMove event of document, we just have offsetX or clientX of pointer from document view
        // WHY: so we save this value for calc offsetX of pointer from Slider view
        startPosition.current = event.clientX - event.nativeEvent.offsetX;
        const newPercent = helpers_1.calcPercentFromWidth(event.clientX, startPosition.current, railWidth);
        const newValue = helpers_1.calcValueFromPercent(newPercent, min, max);
        let newPairValue;
        if (Math.abs(newValue - currentValue[0]) < Math.abs(newValue - currentValue[1])) {
            newPairValue = [newValue, currentValue[1]];
            chossenThumb.current = 0;
        }
        else {
            newPairValue = [currentValue[0], newValue];
            chossenThumb.current = 1;
        }
        handleChangeValue(newPairValue);
        removeDocumentMouseEventListeners();
        addDocumentMouseEventListeners();
    };
    const handleThumbMouseDown = (event, ordinal) => {
        event.preventDefault();
        if (disabled) {
            return;
        }
        setIsActive(true);
        chossenThumb.current = ordinal;
        // WHAT: Save start X position of Slider's rail
        // WHY: change formula here because
        // WHY: thumb is big => many point to click => offset is wrong => currentValue still right when we grab thumb => use currentValue
        const exactOffset = (helpers_1.calcPercentFromValue(currentValue[ordinal], min, max) / 100) * railWidth;
        startPosition.current = event.clientX - exactOffset;
        // WHY: do not update value because users just grab thump => value don't change
        removeDocumentMouseEventListeners();
        addDocumentMouseEventListeners();
    };
    return (react_1.default.createElement("span", { className: classnames_1.default('ds-slider', intent_1.getIntentClassname(intent), {
            disabled,
        }, className) },
        react_1.default.createElement("input", { className: "ds-slider-input", type: "hidden", id: `${id}-first`, name: `${name}-second`, value: currentValue[0], disabled: disabled }),
        react_1.default.createElement("input", { className: "ds-slider-input", type: "hidden", id: `${id}-first`, name: `${name}-second`, value: currentValue[1], disabled: disabled }),
        react_1.default.createElement("span", { className: "ds-slider-mask" },
            react_1.default.createElement("span", { className: "ds-slider-rail", ref: railRef, onMouseDown: handleRailMouseDown }),
            react_1.default.createElement("span", { className: "ds-slider-path", style: percentStyle.pathStyle }),
            react_1.default.createElement("span", { className: classnames_1.default('ds-slider-thumb', {
                    active: isActive && chossenThumb.current === 0,
                }), style: percentStyle.thumbStyle[0], onMouseDown: e => handleThumbMouseDown(e, 0) }),
            react_1.default.createElement("span", { className: classnames_1.default('ds-slider-thumb', {
                    active: isActive && chossenThumb.current === 1,
                }), style: percentStyle.thumbStyle[1], onMouseDown: e => handleThumbMouseDown(e, 1) }),
            marks.map(markValue => {
                return (react_1.default.createElement(SliderMark_1.SliderMark, { key: markValue, value: markValue, percent: helpers_1.calcPercentFromValue(markValue, min, max), markValueRender: markValueRender }));
            }),
            react_1.default.createElement(SliderThumbLabel_1.SliderThumbLabel, { value: currentValue[0], percent: percent[0], isAlwaysShowLabel: isAlwaysShowLabel || isActive, labelValueRender: labelValueRender }),
            react_1.default.createElement(SliderThumbLabel_1.SliderThumbLabel, { value: currentValue[1], percent: percent[1], isAlwaysShowLabel: isAlwaysShowLabel || isActive, labelValueRender: labelValueRender }))));
};
