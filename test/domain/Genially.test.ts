import Genially from "../../src/contexts/core/genially/domain/Genially";
import IncorrectGeniallyNameValue from "../../src/contexts/core/genially/domain/IncorrectGeniallyNameValue";
import IncorrectGeniallyDescriptionValue from "../../src/contexts/core/genially/domain/IncorrectGeniallyDescriptionValue";

describe("Genially invariant", () => {
  describe("name must have a value with length from 3 to 20", () => {
    test.each([undefined, "na", "n".repeat(21)])(
      "Creation of a genially with name %s should throw an exception",
      (name) => {
        expect(() => new Genially("id", name)).toThrow(
          IncorrectGeniallyNameValue
        );
      }
    );
  });

  describe("description length must be shorter than 125 characters", () => {
    it("should return a bad request status", async () => {
      expect(() => new Genially("id", "name", "d".repeat(126))).toThrow(
        IncorrectGeniallyDescriptionValue
      );
    });
  });
});

describe("rename", () => {
  const genially = new Genially("id", "name");
  it("should change the name", () => {
    genially.rename("new name");

    expect(genially.name).toBe("new name");
  });

  it("should update the modification date", () => {
    genially.rename("new name");

    expect(genially.modifiedAt).toEqual(expect.any(Date));
  });
});

describe("delete", () => {
  const genially = new Genially("id", "name");
  it("should update the delation date", () => {
    genially.delete();

    expect(genially.deletedAt).toEqual(expect.any(Date));
  });
});
