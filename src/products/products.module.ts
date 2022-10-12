import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports : [
    SequelizeModule.forFeature([Product]),
    FilesModule
  ]
})
export class ProductsModule {}
