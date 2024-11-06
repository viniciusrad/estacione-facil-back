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
exports.AdminUsersController = void 0;
const common_1 = require("@nestjs/common");
const admin_users_service_1 = require("./admin-users.service");
const create_admin_user_dto_1 = require("./dto/create-admin-user.dto");
const admin_user_entity_1 = require("../entities/admin-user.entity");
const user_type_enum_1 = require("./enums/user-type.enum");
let AdminUsersController = class AdminUsersController {
    constructor(adminUsersService) {
        this.adminUsersService = adminUsersService;
    }
    async create(createAdminUserDto) {
        try {
            let lastId = Math.max(...this.adminUsersService.findAll().map(user => user.id), 0);
            if (lastId === -Infinity) {
                lastId = 0;
            }
            const adminData = Object.assign(Object.assign({}, createAdminUserDto), { id: lastId + 1, tipo: user_type_enum_1.UserType.ADMIN });
            const existingUserEmail = this.adminUsersService.findByEmail(adminData.email);
            const existingUserCpf = this.adminUsersService.findByCpf(adminData.cpf);
            if (existingUserEmail) {
                throw new common_1.BadRequestException('Email já cadastrado');
            }
            if (existingUserCpf) {
                throw new common_1.BadRequestException('CPF já cadastrado');
            }
            return this.adminUsersService.create(adminData);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    findAll(tipo) {
        if (tipo) {
            return this.adminUsersService.findByType(tipo);
        }
        return this.adminUsersService.findAll();
    }
    findOne(id) {
        const admin = this.adminUsersService.findOne(+id);
        if (!admin) {
            throw new common_1.BadRequestException('Usuário não encontrado');
        }
        return admin;
    }
    update(id, updateAdminDto) {
        return this.adminUsersService.update(+id, updateAdminDto);
    }
    remove(id) {
        this.adminUsersService.remove(+id);
    }
    getMockUsers() {
        return this.adminUsersService.getAllMockUsers();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_user_dto_1.CreateAdminUserDto]),
    __metadata("design:returntype", Promise)
], AdminUsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('tipo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], AdminUsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", admin_user_entity_1.AdminUser)
], AdminUsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", admin_user_entity_1.AdminUser)
], AdminUsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdminUsersController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('mock/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AdminUsersController.prototype, "getMockUsers", null);
AdminUsersController = __decorate([
    (0, common_1.Controller)('admin/users'),
    __metadata("design:paramtypes", [admin_users_service_1.AdminUsersService])
], AdminUsersController);
exports.AdminUsersController = AdminUsersController;
//# sourceMappingURL=admin-users.controller.js.map