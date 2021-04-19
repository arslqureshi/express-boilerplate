"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});
exports.default = mongoose.model('todo', todoSchema, 'todos');
//# sourceMappingURL=todo.interface.js.map