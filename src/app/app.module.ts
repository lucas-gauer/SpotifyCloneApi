import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { Artist } from './artist/artist.entity';
import { ArtistModule } from './artist/artist.module';
import { Album } from './album/album.entity';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: 'spotify',
      entities: [Artist, Album],
      synchronize: true, //! remove for production
      timezone: 'Z',
    }),
    ArtistModule,
    AlbumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
