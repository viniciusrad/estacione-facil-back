"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClienteDto = void 0;
const base_user_dto_1 = require("./base-user.dto");
const user_type_enum_1 = require("../enums/user-type.enum");
class CreateClienteDto extends base_user_dto_1.BaseUserDto {
    constructor() {
        super(...arguments);
        this.tipo = user_type_enum_1.UserType.CLIENTE;
    }
}
exports.CreateClienteDto = CreateClienteDto;
//# sourceMappingURL=create-cliente.dto.js.map