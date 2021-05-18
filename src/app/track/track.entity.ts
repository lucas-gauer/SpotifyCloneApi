import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Album } from '../album/album.entity';

@Entity()
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'int', default: 0 })
  views: string;

  @Column({ type: 'varchar', length: 128 })
  path: string;

  @ManyToOne(() => Album, (album) => album.track, { nullable: false })
  album: Album;
}
