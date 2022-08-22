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
exports.StepperProgress = void 0;
const classnames_1 = __importDefault(require("classnames"));
const react_1 = __importStar(require("react"));
const __1 = require("../..");
const Tick_1 = require("../../icons/Tick");
const Undo_1 = require("../../icons/Undo");
const Step_1 = require("./Step");
exports.StepperProgress = props => {
    const { currentStep, vertical = false, className, children, onClickUndo, noTurnBack } = props;
    const currentProgress = react_1.useRef(null);
    const [currentStepIndex, setCurrentStepIndex] = react_1.useState(0);
    const stepElements = react_1.default.Children.toArray(children)
        .filter(Step_1.isStepElement)
        .map(step => step.props);
    const calcConnectLineDist = () => {
        var _a, _b, _c, _d;
        if (currentProgress.current && stepElements) {
            const connectLines = (_a = currentProgress.current) === null || _a === void 0 ? void 0 : _a.getElementsByClassName('connect-line');
            const stepNodes = (_b = currentProgress.current) === null || _b === void 0 ? void 0 : _b.getElementsByClassName('step-node');
            for (let index = 1; index < (stepElements === null || stepElements === void 0 ? void 0 : stepElements.length); index++) {
                const prevNodeX = (_c = stepNodes[index - 1]) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect()[!vertical ? 'x' : 'y'];
                const curNodeX = ((_d = stepNodes[index]) === null || _d === void 0 ? void 0 : _d.getBoundingClientRect()[!vertical ? 'x' : 'y']) - 36;
                const distance = curNodeX - prevNodeX;
                connectLines[index - 1].style[vertical ? 'height' : 'width'] = distance - 8 + 'px';
                if (vertical) {
                    connectLines[index - 1].style.bottom = `-${distance - 4}px`;
                }
            }
        }
    };
    const onClickNode = (id, isActivated) => () => {
        if (onClickUndo && isActivated) {
            onClickUndo(id);
        }
    };
    react_1.useEffect(() => {
        calcConnectLineDist();
        setCurrentStepIndex((stepElements === null || stepElements === void 0 ? void 0 : stepElements.findIndex(obj => obj.id === currentStep)) || 0);
    }, [children]);
    return (react_1.default.createElement("div", { ref: currentProgress, className: classnames_1.default('ds-step-wrapper', {
            vertical,
            horizontal: !vertical,
        }, className) }, stepElements === null || stepElements === void 0 ? void 0 : stepElements.map((step, index) => {
        const isActive = index <= currentStepIndex;
        const isActivated = index < currentStepIndex;
        const isCurrentStep = step.id === currentStep;
        return (react_1.default.createElement("div", { key: step.id, className: classnames_1.default('stepper', {
                horizontal: vertical,
                vertical: !vertical,
            }), style: !vertical
                ? {
                    width: `calc(100% / ${stepElements.length})`,
                }
                : {} },
            react_1.default.createElement("div", { className: classnames_1.default('step-node', {
                    border: isActive && !isActivated,
                    'current-step': isCurrentStep,
                }) },
                isActivated && !noTurnBack ? (react_1.default.createElement(__1.Tooltip, { content: "Go back to this step" },
                    react_1.default.createElement("div", { className: classnames_1.default('step-number', {
                            border: !isActive && !isActivated,
                            active: isActive,
                            activated: isActivated,
                            backable: !noTurnBack && isActivated,
                        }), onClick: onClickNode(step.id, isActivated) },
                        react_1.default.createElement(Undo_1.UndoIcon, { size: 20, className: "undo-icon" }),
                        react_1.default.createElement(Tick_1.TickIcon, { size: 20, className: "tick-icon" }),
                        react_1.default.createElement("span", null, index + 1)))) : (react_1.default.createElement("div", { className: classnames_1.default('step-number', {
                        border: !isActive && !isActivated,
                        activated: isActivated,
                        active: isActive,
                    }), onClick: onClickNode(step.id, isActivated) },
                    react_1.default.createElement(Tick_1.TickIcon, { size: 20, className: "tick-icon" }),
                    react_1.default.createElement("span", null, index + 1))),
                index < stepElements.length - 1 && (react_1.default.createElement("div", { className: classnames_1.default('connect-line', { activated: isActivated }) }))),
            react_1.default.createElement("div", { className: classnames_1.default('step-info') },
                react_1.default.createElement("div", { className: classnames_1.default('step-title', {
                        active: isActive,
                        vertical,
                    }) }, step.title),
                step.children && isCurrentStep && vertical && (react_1.default.createElement("div", { className: "step-desc" }, step.children)))));
    })));
};
