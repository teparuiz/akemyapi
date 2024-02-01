import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';
import { ProvidersModule } from './providers/providers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CashCutModule } from './cash-cut/cash-cut.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CatsModule,
    BreedsModule,
    ProvidersModule,
    UsersModule,
    AuthModule,
    CashCutModule,
  ],
  controllers: [],
})
export class AppModule {}
