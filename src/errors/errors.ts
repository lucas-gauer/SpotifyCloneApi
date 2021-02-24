export class EntityNotFound extends Error {
  constructor(entityName: string) {
    super(entityName + ' not found');
    this.name = 'EntityNotFound';
  }
}

export class DuplicatedEntry extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DuplicatedEntry';
  }
}

export class InvalidInput extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidInput';
  }
}
