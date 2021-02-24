import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFound } from '../../errors/errors';
import { DeepPartial, Repository } from 'typeorm';
import { Album } from './album.entity';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private Albums: Repository<Album>,
  ) {}

  findAll(): Promise<Album[]> {
    return this.Albums.find();
  }

  async findOne(id: number): Promise<Album> {
    const album = await this.Albums.findOne(id);
    if (!album) throw new EntityNotFound('Album');
    return album;
  }

  async create(album: Album): Promise<Album> {
    return this.Albums.save(album);
  }

  async update(id: number, album: DeepPartial<Album>): Promise<void> {
    await this.findOne(id);
    await this.Albums.save({ id: id, ...album });
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.Albums.delete(id);
  }
}
