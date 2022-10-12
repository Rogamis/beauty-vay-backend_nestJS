import { Body, Controller, Delete, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService){}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreateProductDto,
               @UploadedFile() image) {
        return this.productService.create(dto, image)
    }

    @Delete(':id')
    delete(@Param('id') id:number ) {
        return this.productService.remove(id);
    }
}
