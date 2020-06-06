import Genially from "../../src/contexts/core/genially/domain/Genially";
import IncorrectGeniallyNameValue from "../../src/contexts/core/genially/domain/IncorrectGeniallyNameValue";

describe("Genially invariant", () => {
  describe("name must have a value with length from 3 to 20", () => {
    test.each([undefined, "na", "n".repeat(21)])(
      "Creation of a genially with name %s should throw an exception",
      name => {
        expect(() => new Genially("id", name)).toThrow(IncorrectGeniallyNameValue);
      }
    );
  });
});
