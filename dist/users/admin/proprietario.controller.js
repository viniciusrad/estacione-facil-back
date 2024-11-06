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
exports.ProprietarioController = void 0;
const common_1 = require("@nestjs/common");
const admin_users_service_1 = require("./admin-users.service");
const create_proprietario_dto_1 = require("./dto/create-proprietario.dto");
const admin_user_entity_1 = require("../entities/admin-user.entity");
const user_type_enum_1 = require("./enums/user-type.enum");
let ProprietarioController = class ProprietarioController {
    constructor(adminUsersService) {
        this.adminUsersService = adminUsersService;
    }
    async create(createProprietarioDto) {
        try {
            const proprietarioData = Object.assign(Object.assign({}, createProprietarioDto), { tipo: user_type_enum_1.UserType.PROPRIETARIO });
            const existingUserEmail = this.adminUsersService.findByEmail(proprietarioData.email);
            const existingUserCpf = this.adminUsersService.findByCpf(proprietarioData.cpf);
            if (existingUserEmail) {
                throw new common_1.BadRequestException('Email já cadastrado');
            }
            if (existingUserCpf) {
                throw new common_1.BadRequestException('CPF já cadastrado');
            }
            return this.adminUsersService.create(proprietarioData);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    findAll() {
        return this.adminUsersService.findByType(user_type_enum_1.UserType.PROPRIETARIO);
    }
    findOne(id) {
        const proprietario = this.adminUsersService.findOne(+id);
        if (!proprietario || proprietario.tipo !== user_type_enum_1.UserType.PROPRIETARIO) {
            throw new common_1.BadRequestException('Proprietário não encontrado');
        }
        return proprietario;
    }
    update(id, updateProprietarioDto) {
        return this.adminUsersService.update(+id, updateProprietarioDto);
    }
    remove(id) {
        this.adminUsersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('cadastro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_proprietario_dto_1.CreateProprietarioDto]),
    __metadata("design:returntype", Promise)
], ProprietarioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProprietarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", admin_user_entity_1.AdminUser)
], ProprietarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", admin_user_entity_1.AdminUser)
], ProprietarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProprietarioController.prototype, "remove", null);
ProprietarioController = __decorate([
    (0, common_1.Controller)('proprietario'),
    __metadata("design:paramtypes", [admin_users_service_1.AdminUsersService])
], ProprietarioController);
exports.ProprietarioController = ProprietarioController;
//# sourceMappingURL=proprietario.controller.js.map