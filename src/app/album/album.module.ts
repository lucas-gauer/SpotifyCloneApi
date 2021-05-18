import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { AlbumService } from './album.service';
import { AlbumController } from './album.controller';
import { SongModule } from '../song/song.module';

@Module({
  imports: [TypeOrmModule.forFeature([Album]), SongModule],
  providers: [AlbumService],
  controllers: [AlbumController],
  exports: [AlbumService],
})
export class AlbumModule {}
