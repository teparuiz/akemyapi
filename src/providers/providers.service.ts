import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Provider } from './entities/provider.entity';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectRepository(Provider)
    private readonly providersRepository: Repository<Provider>,
  ) {}

  async create(createProviderDto: CreateProviderDto) {
    const provider = this.providersRepository.create(createProviderDto);

    return await this.providersRepository.save(provider);
  }

  async findAll() {
    return await this.providersRepository.find();
  }

  findOne(id: string) {
    return `This action returns a #${id} provider`;
  }

  update(id: string, updateProviderDto: UpdateProviderDto) {
    return `This action updates a #${id} provider`;
  }

  async remove(id: string) {
    return await this.providersRepository.softDelete(id);
  }
}
