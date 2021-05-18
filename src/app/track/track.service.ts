import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFound } from '../../errors/errors';
import { DeepPartial, Repository } from 'typeorm';
import { Track } from './track.entity';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private Songs: Repository<Track>,
  ) {}

  findAll(): Promise<Track[]> {
    return this.Songs.find();
  }

  async findOne(id: number): Promise<Track> {
    const song = await this.Songs.findOne(id);
    if (!song) throw new EntityNotFound('Song');
    return song;
  }

  async create(song: Track): Promise<Track> {
    return this.Songs.save(song);
  }

  async update(id: number, song: DeepPartial<Track>): Promise<void> {
    await this.findOne(id);
    await this.Songs.save({ id: id, ...song });
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.Songs.delete(id);
  }
}
