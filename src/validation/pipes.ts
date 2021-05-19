import { ValidationPipe } from '@nestjs/common';

export const ValidateCreate = new ValidationPipe({
  transform: true,
  stopAtFirstError: true,
  whitelist: true,
});

export const ValidateUpdate = new ValidationPipe({
  transform: true,
  skipMissingProperties: true,
  stopAtFirstError: true,
  whitelist: true,
});
