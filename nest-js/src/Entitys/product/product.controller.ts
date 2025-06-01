import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductEntity } from './product';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Promise<ProductEntity[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ProductEntity | null> {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() productData: Partial<ProductEntity>): Promise<ProductEntity> {
    return this.productService.create(productData);
  }
}
