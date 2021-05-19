import { IsDefined, Length } from 'class-validator';

export class ArtistInput {
  @IsDefined()
  @Length(1, 64)
  name: string;

  @IsDefined()
  @Length(1, 256)
  about: string;
}
