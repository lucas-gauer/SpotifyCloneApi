import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFound } from '../../errors/errors';
import { Repository } from 'typeorm';
import { Track } from './track.entity';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private Tracks: Repository<Track>,
  ) {}

  findAll(): Promise<Track[]> {
    return this.Tracks.find();
  }

  async findOne(id: number): Promise<Track> {
    const tracks = await this.Tracks.findOne(id);
    if (!tracks) throw new EntityNotFound('Track');
    return tracks;
  }

  async create(track: Track): Promise<Track> {
    return this.Tracks.save(track);
  }

  async update(id: number, track: Partial<Track>): Promise<void> {
    await this.findOne(id);
    await this.Tracks.save({ id: id, ...track });
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.Tracks.delete(id);
  }
}
