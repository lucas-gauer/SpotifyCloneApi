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

@Controller('track')
export class TrackController {
  constructor(private readonly Tracks: TrackService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.Tracks.findOne(id);
  }

  @Get()
  async findAll() {
    return this.Tracks.findAll();
  }

  @Post()
  async create(@Body() body: Track) {
    return await this.Tracks.create(body);
  }

  @Put(':id')
  async update(@Body() body: Track, @Param('id', ParseIntPipe) id: number) {
    return await this.Tracks.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.Tracks.remove(id);
  }
}
