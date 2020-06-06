import InMemoryGenerallyRepository from "../../src/contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import Genially from "../../src/contexts/core/genially/domain/Genially";
import GeniallyRepository from "../../src/contexts/core/genially/domain/GeniallyRepository";

describe("GeniallyRepository", () => {
  let repo: GeniallyRepository;
  const genially = new Genially("id", "name");

  beforeEach(() => {
    repo = new InMemoryGenerallyRepository();
  });

  describe("save", () => {
    it("should save the genially in the repo", async() => {
      await repo.save(genially);

      expect(await repo.find(genially.id)).toEqual(genially);
    });
  });

  describe("find", () => {
    it("should return a genially present in the repository", async() => {
      await repo.save(genially);

      expect(await repo.find(genially.id)).toEqual(genially);
    });

    it("should return undefined for a genially not present in the repository", async() => {
      expect(await repo.find(genially.id)).not.toBeDefined();
    });
  });

  describe("delete", () => {
    it("should delete a genially in the repo", async() => {
      await repo.save(genially);
      expect(await repo.find(genially.id)).toEqual(genially);

      await repo.delete(genially.id);

      expect(await repo.find(genially.id)).not.toBeDefined();
    });
  });
});
