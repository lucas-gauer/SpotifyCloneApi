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
import { Track } from './track.entity';
import { TrackService } from './track.service';

@Controller('song')
export class TrackController {
  constructor(private readonly Songs: TrackService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.Songs.findOne(id);
  }

  @Get()
  async findAll() {
    return this.Songs.findAll();
  }

  @Post()
  async create(@Body() body: Track) {
    return await this.Songs.create(body);
  }

  @Put(':id')
  async update(@Body() body: Track, @Param('id', ParseIntPipe) id: number) {
    return await this.Songs.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.Songs.remove(id);
  }
}
