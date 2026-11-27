import { describe, it, expect } from "vitest";
import { steviloBendov, opisPlacila } from "../src/lib/termini";

describe("steviloBendov", () => {
  it("pravilno izpiše en bend", () => {
    expect(steviloBendov(1)).toBe("1 bend");
  });

  it("pravilno izpiše dva benda", () => {
    expect(steviloBendov(2)).toBe("2 benda");
  });

  it("pravilno izpiše tri bende", () => {
    expect(steviloBendov(3)).toBe("3 bende");
  });

  it("pravilno izpiše štiri bende", () => {
    expect(steviloBendov(4)).toBe("4 bende");
  });

  it("pravilno izpiše pet bendov", () => {
    expect(steviloBendov(5)).toBe("5 bendov");
  });
});

describe("opisPlacila", () => {
  it("prikaže honorar z zneskom", () => {
    expect(
      opisPlacila({ nacinPlacila: "HONORAR", znesek: 200 })
    ).toBe("Honorar 200 €");
  });

  it("prikaže delitev vstopnine", () => {
    expect(
      opisPlacila({ nacinPlacila: "DELITEV_VSTOPNINE", znesek: null })
    ).toBe("Delitev vstopnine");
  });

  it("prikaže nastop brez plačila", () => {
    expect(
      opisPlacila({ nacinPlacila: "BREZ", znesek: null })
    ).toBe("Brez plačila");
  });
});