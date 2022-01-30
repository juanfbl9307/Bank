import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Status } from '../database/entities/status.entity';

@Injectable()
export class StatusesRepository {
  constructor(
    @InjectRepository(Status) private statusModel: Repository<Status>,
  ) {}
  async getStatuses(): Promise<Status[]> {
    return await this.statusModel.find({ relations: ['banks'] });
  }
  async createStatus(params): Promise<Status[]> {
    const status = this.statusModel.create(params);
    return await this.statusModel.save(status);
  }
}
