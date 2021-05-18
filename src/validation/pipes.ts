import { ValidationPipe } from '@nestjs/common';

export const ValidateCreate = new ValidationPipe({
  transform: true,
});

export const ValidateUpdate = new ValidationPipe({
  transform: true,
  skipMissingProperties: true,
});
