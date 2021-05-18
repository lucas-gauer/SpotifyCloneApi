import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Artist } from './artist/artist.entity';
import { ArtistModule } from './artist/artist.module';
import { Album } from './album/album.entity';
import { AlbumModule } from './album/album.module';
import { Track } from './track/track.entity';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'gauer', // TODO .env
      password: 'qweasdzxc', // TODO .env
      database: 'spotify',
      entities: [Album, Artist, Track],
      synchronize: true, //! remove for production // TODO .env
    }),
    AlbumModule,
    ArtistModule,
    TrackModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
