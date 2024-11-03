"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProprietarioDto = void 0;
const base_user_dto_1 = require("./base-user.dto");
const user_type_enum_1 = require("../enums/user-type.enum");
class CreateProprietarioDto extends base_user_dto_1.BaseUserDto {
    constructor() {
        super(...arguments);
        this.tipo = user_type_enum_1.UserType.PROPRIETARIO;
    }
}
exports.CreateProprietarioDto = CreateProprietarioDto;
//# sourceMappingURL=create-proprietario.dto.js.map