import { BaseUserDto } from '../../admin/dto/base-user.dto';
import { UserType } from '../../admin/enums/user-type.enum';

export class CreateClienteDto extends BaseUserDto {
  readonly tipo: UserType = UserType.CLIENTE;
} 