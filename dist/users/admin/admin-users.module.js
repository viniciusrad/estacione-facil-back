"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUsersModule = void 0;
const common_1 = require("@nestjs/common");
const admin_users_service_1 = require("./admin-users.service");
const admin_users_controller_1 = require("./admin-users.controller");
const proprietario_controller_1 = require("./proprietario.controller");
const cliente_controller_1 = require("./cliente.controller");
let AdminUsersModule = class AdminUsersModule {
};
AdminUsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [admin_users_controller_1.AdminUsersController, proprietario_controller_1.ProprietarioController, cliente_controller_1.ClienteController],
        providers: [admin_users_service_1.AdminUsersService],
        exports: [admin_users_service_1.AdminUsersService],
    })
], AdminUsersModule);
exports.AdminUsersModule = AdminUsersModule;
//# sourceMappingURL=admin-users.module.js.map