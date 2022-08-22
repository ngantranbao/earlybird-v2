"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsErrorImg = void 0;
const react_1 = require("react");
exports.useIsErrorImg = (src, srcSet) => {
    const [isLoadedError, setIsLoadedError] = react_1.useState(false);
    react_1.useEffect(() => {
        if (!src && !srcSet) {
            return undefined;
        }
        setIsLoadedError(false);
        let active = true;
        const image = new Image();
        image.src = src ? src : '';
        image.srcset = srcSet ? srcSet : '';
        image.onload = () => {
            if (!active) {
                return;
            }
            setIsLoadedError(false);
        };
        image.onerror = () => {
            if (!active) {
                return;
            }
            setIsLoadedError(true);
        };
        return () => {
            active = false;
        };
    }, [src, srcSet]);
    return isLoadedError;
};
