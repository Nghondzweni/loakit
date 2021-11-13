"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolsController = void 0;
const common_1 = require("@nestjs/common");
const schools_service_1 = require("./schools.service");
let SchoolsController = class SchoolsController {
    constructor(schoolsService) {
        this.schoolsService = schoolsService;
    }
    async addSchool(name, grade) {
        return await this.schoolsService.addSchool(name, grade);
    }
    async getSchools() {
        return await this.schoolsService.getSchools();
    }
    async editSchool(_id, name, grade) {
        return await this.schoolsService.editSchool(_id, name, grade);
    }
    async deleteSchool(_id) {
        return await this.schoolsService.deleteSchool(_id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('grade')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "addSchool", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "getSchools", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)('_id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('grade')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "editSchool", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SchoolsController.prototype, "deleteSchool", null);
SchoolsController = __decorate([
    (0, common_1.Controller)('schools'),
    __metadata("design:paramtypes", [schools_service_1.SchoolsService])
], SchoolsController);
exports.SchoolsController = SchoolsController;
//# sourceMappingURL=schools.controller.js.map