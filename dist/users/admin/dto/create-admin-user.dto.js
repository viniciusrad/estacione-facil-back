"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminUserDto = void 0;
const base_user_dto_1 = require("./base-user.dto");
const user_type_enum_1 = require("../enums/user-type.enum");
class CreateAdminUserDto extends base_user_dto_1.BaseUserDto {
    constructor() {
        super(...arguments);
        this.tipo = user_type_enum_1.UserType.ADMIN;
    }
}
exports.CreateAdminUserDto = CreateAdminUserDto;
//# sourceMappingURL=create-admin-user.dto.js.map