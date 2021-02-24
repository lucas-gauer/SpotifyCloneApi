import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Album } from '../album/album.entity';

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 256, nullable: false })
  about: string;

  @ManyToMany(() => Album, (album) => album.artists)
  @JoinTable()
  albums: Album[];
}
