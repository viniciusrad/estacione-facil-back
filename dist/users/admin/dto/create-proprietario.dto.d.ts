import { BaseUserDto } from './base-user.dto';
import { UserType } from '../enums/user-type.enum';
export declare class CreateProprietarioDto extends BaseUserDto {
    readonly tipo: UserType;
}
