import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  findAll(): Promise<ProductEntity[]> {
    return this.productRepository.find();
  }

  findOne(id: number): Promise<ProductEntity | null> {
    return this.productRepository.findOne({ where: { id } });
  }

  create(productData: Partial<ProductEntity>): Promise<ProductEntity> {
    const product = this.productRepository.create(productData);
    return this.productRepository.save(product);
  }
}
