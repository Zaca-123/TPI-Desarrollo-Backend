// menu.service.ts
import { Injectable } from '@nestjs/common';
import { MenuEntity } from './menu';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuEntity)
    private readonly menuRepository: Repository<MenuEntity>,
  ) {}

  async findAll(): Promise<MenuEntity[]> {
    return this.menuRepository.find({ relations: ['restaurant', 'products'] });
  }

  async findOne(id: number): Promise<MenuEntity> {
    return this.menuRepository.findOne({ where: { id } });
  }

  async create(data: Partial<MenuEntity>): Promise<MenuEntity> {
    const menu = this.menuRepository.create(data);
    return this.menuRepository.save(menu);
  }

  async update(id: number, data: Partial<MenuEntity>): Promise<MenuEntity> {
    await this.menuRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.menuRepository.delete(id);
  }
}
