import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';

import { ValidateCreate, ValidateUpdate } from '../../validation/pipes';

import { ArtistInput } from './artist.input';
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
  @UsePipes(ValidateCreate)
  async create(@Body() body: ArtistInput) {
    return await this.Artists.create(body);
  }

  @Put(':id')
  @UsePipes(ValidateUpdate)
  async update(
    @Body() body: Partial<ArtistInput>,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.Artists.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.Artists.remove(id);
  }
}
