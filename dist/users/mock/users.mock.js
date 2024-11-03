"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockUsers = void 0;
const user_type_enum_1 = require("../admin/enums/user-type.enum");
exports.mockUsers = [
    {
        id: 1,
        nome: 'Administrador',
        email: 'admin@sistema.com',
        cpf: '111.111.111-11',
        telefone: '(11) 99999-9999',
        senha: 'admin123',
        tipo: user_type_enum_1.UserType.ADMIN,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        nome: 'Proprietário',
        email: 'proprietario@sistema.com',
        cpf: '222.222.222-22',
        telefone: '(11) 88888-8888',
        senha: 'prop123',
        tipo: user_type_enum_1.UserType.PROPRIETARIO,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 3,
        nome: 'Cliente',
        email: 'cliente@sistema.com',
        cpf: '333.333.333-33',
        telefone: '(11) 77777-7777',
        senha: 'cliente123',
        tipo: user_type_enum_1.UserType.CLIENTE,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
//# sourceMappingURL=users.mock.js.map