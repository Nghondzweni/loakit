"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const schools_module_1 = require("./schools/schools.module");
const learners_module_1 = require("./learners/learners.module");
const teachers_module_1 = require("./teachers/teachers.module");
const interests_module_1 = require("./interests/interests.module");
const rewards_module_1 = require("./rewards/rewards.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schools_module_1.SchoolsModule,
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/loakit'),
            learners_module_1.LearnersModule,
            teachers_module_1.TeachersModule,
            interests_module_1.InterestsModule,
            rewards_module_1.RewardsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map