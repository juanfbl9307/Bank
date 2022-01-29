import { Injectable } from '@nestjs/common';
import { StatusesRepository } from '../repositories/statuses.repository';
import { Status } from '../database/entities/status.entity';

@Injectable()
export class StatusService {
  constructor(private readonly statusRepository: StatusesRepository) {}
  async getStatuses(): Promise<Status[]> {
    return await this.statusRepository.getStatuses();
  }
  async createStatus(params): Promise<Status[]> {
    return await this.statusRepository.createStatus(params);
  }
}
