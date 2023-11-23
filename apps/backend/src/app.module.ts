import { DynamicModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { SourceModule } from './source/source.module';

@Module({})
export class AppModule {
  static async register(source: string): Promise<DynamicModule> {
    return {
      module: AppModule,
      imports: [
        AuthModule,
        UsersModule,
        SourceModule.register(source),
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: '127.0.0.1',
          port: 5432,
          username: 'postgres',
          password: 'postgres',
          database: 'postgres',
          autoLoadEntities: true,
          synchronize: true,
        }),
      ],
      controllers: [AppController],
      providers: [AppService],
    };
  }
}
