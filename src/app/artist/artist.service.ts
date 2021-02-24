import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFound } from '../../errors/errors';
import { DeepPartial, Repository } from 'typeorm';
import { Artist } from './artist.entity';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(Artist)
    private Artists: Repository<Artist>,
  ) {}

  findAll(): Promise<Artist[]> {
    return this.Artists.find();
  }

  async findOne(id: number): Promise<Artist> {
    const artist = await this.Artists.findOne(id);
    if (!artist) throw new EntityNotFound('Artist');
    return artist;
  }

  async create(artist: Artist): Promise<Artist> {
    return this.Artists.save(artist);
  }

  async update(id: number, artist: DeepPartial<Artist>): Promise<void> {
    await this.findOne(id);
    await this.Artists.save({ id: id, ...artist });
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.Artists.delete(id);
  }
}
