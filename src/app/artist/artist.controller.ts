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
import { Artist } from './artist.entity';
import { ArtistService } from './artist.service';

@Controller('artist')
export class ArtistController {
  constructor(private readonly Artists: ArtistService) {}

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.Artists.findOne(id);
  }

  @Get()
  async findAll() {
    return this.Artists.findAll();
  }

  @Post()
  async create(@Body() body: Artist) {
    return await this.Artists.create(body);
  }

  @Put(':id')
  async update(@Body() body: Artist, @Param('id', ParseIntPipe) id: number) {
    return await this.Artists.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.Artists.remove(id);
  }
}
