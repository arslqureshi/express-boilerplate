"use strict";
//function to verify authentication
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_interface_1 = __importDefault(require("../interface/todo.interface"));
function default_1(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield todo_interface_1.default.find({});
        console.log(data);
        const check = true;
        if (!check) {
            res.status(401).send('Access Denied');
        }
        else {
            console.log("middleware");
            next();
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=middleware.route.js.map