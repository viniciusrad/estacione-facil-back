"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUsersService = void 0;
const common_1 = require("@nestjs/common");
const users_mock_1 = require("../mock/users.mock");
let AdminUsersService = class AdminUsersService {
    constructor() {
        this.users = [...users_mock_1.mockUsers];
    }
    create(createUserDto) {
        const user = Object.assign(Object.assign({ id: Math.max(...this.users.map(u => u.id)) + 1 }, createUserDto), { createdAt: new Date(), updatedAt: new Date() });
        this.users.push(user);
        return user;
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        return this.users.find(user => user.id === id);
    }
    findByType(tipo) {
        return this.users.filter(user => user.tipo === tipo);
    }
    findByEmail(email) {
        return this.users.find(user => user.email === email);
    }
    findByCpf(cpf) {
        return this.users.find(user => user.cpf === cpf);
    }
    update(id, updateUserDto) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new common_1.NotFoundException(`Usuário com ID ${id} não encontrado`);
        }
        const updatedUser = Object.assign(Object.assign(Object.assign({}, this.users[userIndex]), updateUserDto), { updatedAt: new Date() });
        this.users[userIndex] = updatedUser;
        return updatedUser;
    }
    remove(id) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new common_1.NotFoundException(`Usuário com ID ${id} não encontrado`);
        }
        this.users.splice(userIndex, 1);
    }
    getAllMockUsers() {
        return users_mock_1.mockUsers;
    }
};
AdminUsersService = __decorate([
    (0, common_1.Injectable)()
], AdminUsersService);
exports.AdminUsersService = AdminUsersService;
//# sourceMappingURL=admin-users.service.js.map