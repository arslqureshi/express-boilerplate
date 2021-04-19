"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_controller_1 = __importDefault(require("../controller/todo.controller"));
const middleware_route_1 = __importDefault(require("./middleware.route"));
const todoRouter = express_1.default.Router();
todoRouter.get('/', todo_controller_1.default.get);
todoRouter.post('/', middleware_route_1.default, todo_controller_1.default.add);
exports.default = todoRouter;
//# sourceMappingURL=todo.route.js.map