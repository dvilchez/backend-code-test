import IncorrectGeniallyNameValue from "./IncorrectGeniallyNameValue";
import IncorrectGeniallyDescriptionValue from "./IncorrectGeniallyDescriptionValue";

export default class Genially {
  private _id: string;
  private _name: string;
  private _description: string;
  private _createdAt: Date;
  private _modifiedAt: Date;
  private _deletedAt: Date;

  constructor(id: string, name: string, description?: string) {
    if (!name || name.length < 3 || name.length > 20)
      throw new IncorrectGeniallyNameValue(name);
    if (!!description && description.length > 125)
      throw new IncorrectGeniallyDescriptionValue(description);

    this._id = id;
    this._name = name;
    this._description = description;
    this._createdAt = new Date();
  }

  rename(newName: string): Genially {
    this._name = newName;
    this._modifiedAt = new Date();

    return this;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get modifiedAt(): Date {
    return this._modifiedAt;
  }

  get deletedAt(): Date {
    return this._deletedAt;
  }
}
