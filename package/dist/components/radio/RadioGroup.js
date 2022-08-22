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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioGroup = void 0;
const react_1 = __importStar(require("react"));
const generateUEID_1 = require("../../utils/generateUEID");
const Radio_1 = require("./Radio");
exports.RadioGroup = props => {
    const { name, onChange = () => { }, defaultValue = '', value, children } = props;
    const [groupName, setGroupName] = react_1.useState('');
    react_1.useEffect(() => {
        setGroupName(!name ? `radio-group-name-${generateUEID_1.generateUEID()}` : name);
    }, [name]);
    const isControlled = value !== undefined;
    let [currentValue, setCurrentValue] = react_1.useState(defaultValue);
    currentValue = isControlled ? value : currentValue;
    const handleChange = (event) => {
        const targetValue = event.target.value;
        if (isControlled) {
            onChange(targetValue);
        }
        else {
            setCurrentValue(targetValue);
            onChange(targetValue);
        }
    };
    const radioElements = react_1.default.Children.map(children, child => {
        if (Radio_1.isRadioElement(child)) {
            const { value: childValue } = child.props;
            return react_1.cloneElement(child, {
                name: groupName,
                onChange: handleChange,
                checked: childValue === currentValue,
            });
        }
        return child;
    });
    return react_1.default.createElement("div", null, radioElements);
};
