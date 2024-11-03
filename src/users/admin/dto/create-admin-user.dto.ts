import { BaseUserDto } from './base-user.dto';
import { UserType } from '../enums/user-type.enum';

export class CreateAdminUserDto extends BaseUserDto {
  readonly tipo: UserType = UserType.ADMIN;
} 