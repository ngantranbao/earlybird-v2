"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWidthHeight = void 0;
const react_1 = require("react");
exports.useWidthHeight = (componentRef) => {
    const [width, setWidth] = react_1.useState(0);
    const [height, setHeight] = react_1.useState(0);
    react_1.useEffect(() => {
        const handleResize = () => {
            if (componentRef && componentRef.current) {
                setWidth(componentRef.current.offsetWidth);
                setHeight(componentRef.current.offsetHeight);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [componentRef]);
    return { width, height };
};
