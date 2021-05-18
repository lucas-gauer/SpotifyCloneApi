/* eslint-disable prettier/prettier */

export class Messages {
  static default(field: string) { return `The value of "${field}" is invalid` }
  static require(field: string) { return `"${field}" is required` }
  static notEmpty(field: string) { return `"${field}" cannot be empty` }
}
