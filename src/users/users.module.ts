import { Module } from '@nestjs/common';
import { AdminUsersModule } from './admin/admin-users.module';

@Module({
  imports: [AdminUsersModule],
  exports: [AdminUsersModule],
})
export class UsersModule {} 