import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { AlbumType } from './album-type.enum';
import { Artist } from '../artist/artist.entity';
import { Track } from '../track/track.entity';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  imagePath: string;

  @Column({ type: 'enum', enum: AlbumType })
  type: AlbumType;

  @ManyToMany(() => Artist, (artist) => artist.albums)
  artists: Artist[];

  @OneToMany(() => Track, (track) => track.album)
  tracks: Track[];
}
