"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function to verify authentication
function default_1(req, res, next) {
    const check = true;
    if (!true) {
        res.status(401).send('Access Denied');
    }
    else {
        next();
    }
}
exports.default = default_1;
//# sourceMappingURL=middleware.route.js.map