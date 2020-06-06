export default class IncorrectGeniallyDescriptionValue extends Error {
  constructor(description: string) {
    super(`<${description}> as description value is longer than 125 characters.`);
  }
}
