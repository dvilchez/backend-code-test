export default class IncorrectGeniallyNameValue extends Error {
  constructor(name: string) {
    super(`<${name}> name is invalid. Name must have a value and its length has to be from 3 to 20 characters`);
  }
}
