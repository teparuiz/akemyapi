import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';
import { ProvidersModule } from './providers/providers.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CashCutModule } from './cash-cut/cash-cut.module';
import { ProductsModule } from './products/products.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'monorail.proxy.rlwy.net',
      port: 39083,
      username: 'root',
      password: '5-5EHHAcGhF5hf1BeCach62cBAC-Ff1-',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: false,
    }),
    CatsModule,
    BreedsModule,
    ProvidersModule,
    UsersModule,
    AuthModule,
    CashCutModule,
    ProductsModule,
    StoreModule,
  ],
  controllers: [],
})
export class AppModule {}
