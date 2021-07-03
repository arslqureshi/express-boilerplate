"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const pool = new pg_1.default.Pool({
    user: "",
    password: "",
    host: "",
    port: "",
    database: "",
});
exports.default = pool;
/*
     psql -U postgres = select postgres user in psql
     \l = list all databased
     \c [database name] = select database
     \dt = display all tables in db
*/ 
//# sourceMappingURL=db.js.map