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
      host: 'roundhouse.proxy.rlwy.net',
      port: 15683,
      username: 'root',
      password: 'AaGBDBHbbhH15f2Ae5-GAb3DaEHHGAcF',
      database: 'railway',
      autoLoadEntities: true,
      synchronize: true,
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
