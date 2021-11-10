"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolSchema = void 0;
const mongoose = require("mongoose");
exports.SchoolSchema = new mongoose.Schema({
    name: { type: String, required: true },
    grade: { type: Number, required: true },
});
//# sourceMappingURL=school.model.js.map