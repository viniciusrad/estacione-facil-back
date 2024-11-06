import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'SUPABASE_CLIENT',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const supabaseUrl = configService.get<string>('NEXT_PUBLIC_SUPABASE_URL');

        
        const supabaseKey = configService.get<string>('NEXT_PUBLIC_SUPABASE_ANON_KEY');
        console.log(supabaseUrl, supabaseKey);

        if (!supabaseUrl || !supabaseKey) {
          throw new Error('Supabase URL and Key must be defined');
        }

        return createClient(supabaseUrl, supabaseKey);
      },
    },
  ],
  exports: ['SUPABASE_CLIENT'],
})
export class SupabaseModule {}
