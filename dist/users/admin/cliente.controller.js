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
exports.ClienteController = void 0;
const common_1 = require("@nestjs/common");
const admin_users_service_1 = require("./admin-users.service");
const create_cliente_dto_1 = require("./dto/create-cliente.dto");
const admin_user_entity_1 = require("./entities/admin-user.entity");
const user_type_enum_1 = require("./enums/user-type.enum");
let ClienteController = class ClienteController {
    constructor(adminUsersService) {
        this.adminUsersService = adminUsersService;
    }
    async create(createClienteDto) {
        try {
            const clienteData = Object.assign(Object.assign({}, createClienteDto), { tipo: user_type_enum_1.UserType.CLIENTE });
            const existingUserEmail = this.adminUsersService.findByEmail(clienteData.email);
            const existingUserCpf = this.adminUsersService.findByCpf(clienteData.cpf);
            if (existingUserEmail) {
                throw new common_1.BadRequestException('Email já cadastrado');
            }
            if (existingUserCpf) {
                throw new common_1.BadRequestException('CPF já cadastrado');
            }
            return this.adminUsersService.create(clienteData);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    findAll() {
        return this.adminUsersService.findByType(user_type_enum_1.UserType.CLIENTE);
    }
    findOne(id) {
        const cliente = this.adminUsersService.findOne(+id);
        if (!cliente || cliente.tipo !== user_type_enum_1.UserType.CLIENTE) {
            throw new common_1.BadRequestException('Cliente não encontrado');
        }
        return cliente;
    }
    update(id, updateClienteDto) {
        return this.adminUsersService.update(+id, updateClienteDto);
    }
    remove(id) {
        this.adminUsersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('cadastro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ClienteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", admin_user_entity_1.AdminUser)
], ClienteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", admin_user_entity_1.AdminUser)
], ClienteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClienteController.prototype, "remove", null);
ClienteController = __decorate([
    (0, common_1.Controller)('cliente'),
    __metadata("design:paramtypes", [admin_users_service_1.AdminUsersService])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map