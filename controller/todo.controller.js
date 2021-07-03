"use strict";
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
const TodoController = {
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield todo_interface_1.default.find({});
            if (todos) {
                res.send(todos);
            }
            else {
                res.status(404).send('No todo found');
            }
        });
    },
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let todoData = req.body;
            const found = yield todo_interface_1.default.findOne({ name: todoData.name });
            if (found) {
                res.status(400).send('allready exsists');
            }
            else {
                let newTodo = new todo_interface_1.default(todoData);
                yield newTodo.save((error, addedTodo) => {
                    if (error) {
                        res.send(error.message);
                    }
                    else {
                        res.status(200).send(addedTodo);
                    }
                });
            }
        });
    }
};
exports.default = TodoController;
//# sourceMappingURL=todo.controller.js.map