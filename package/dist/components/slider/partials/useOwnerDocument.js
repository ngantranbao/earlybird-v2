"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOwnerDocument = void 0;
const react_1 = require("react");
exports.useOwnerDocument = (componentRef) => {
    const [document, setDocument] = react_1.useState(null);
    react_1.useEffect(() => {
        if (componentRef && componentRef.current) {
            setDocument(componentRef.current.ownerDocument);
        }
    }, [componentRef]);
    return { document };
};
