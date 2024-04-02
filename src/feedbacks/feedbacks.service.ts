import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedbacks } from './feedbacks.entity';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectRepository(Feedbacks) private repo: Repository<Feedbacks>,
  ) {}

  createFeedback(title: string, description: string) {
    const feedback = this.repo.create({ title: title, description: description });
    return this.repo.save(feedback);
  }

  async getFeedbackById(id: number) {
    const feedback = await this.repo.findOneBy({ id: id });

    if (!feedback) {
        throw new NotFoundException('Feedback not found');
    }

    return feedback;
  }
}
