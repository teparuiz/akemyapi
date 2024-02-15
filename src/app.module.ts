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
      host: process.env.DB_HOST,
      port: 39083,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
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
