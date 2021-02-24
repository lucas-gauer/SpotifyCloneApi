import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Album } from './album.entity';
import { AlbumService } from './album.service';

@Controller('album')
export class AlbumController {
  constructor(private readonly Albums: AlbumService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.Albums.findOne(id);
  }

  @Get()
  async findAll() {
    return this.Albums.findAll();
  }

  @Post()
  async create(@Body() body: Album) {
    return await this.Albums.create(body);
  }

  @Put(':id')
  async update(@Body() body: Album, @Param('id', ParseIntPipe) id: number) {
    return await this.Albums.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.Albums.remove(id);
  }
}
