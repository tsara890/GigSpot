import { describe, it, expect, vi } from "vitest";
import jwt from "jsonwebtoken";
import { ustvariToken, preveriToken } from "../src/lib/token";

vi.mock("../src/config", () => ({
  config: {
    jwtSecret: "test-secret",
    produkcija: false,
  },
}));

describe("JWT avtentikacija", () => {
  it("ustvari veljaven token za glasbenika", () => {
    const uporabnik = { id: 1, vloga: "GLASBENIK" } as const;

    const token = ustvariToken(uporabnik);

    expect(preveriToken(token)).toEqual(uporabnik);
  });

  it("ohrani vlogo organizatorja", () => {
    const uporabnik = { id: 2, vloga: "ORGANIZATOR" } as const;

    expect(preveriToken(ustvariToken(uporabnik))).toEqual(uporabnik);
  });

  it("zavrne neveljaven token", () => {
    expect(preveriToken("invalid-token")).toBeNull();
  });

  it("zavrne prazen token", () => {
    expect(preveriToken("")).toBeNull();
  });

  it("zavrne token z napačnim podpisom", () => {
    const token = jwt.sign(
      { vloga: "GLASBENIK" },
      "wrong-secret"
    );

    expect(preveriToken(token)).toBeNull();
  });

  it("zavrne potekel token", () => {
    const token = jwt.sign(
      { vloga: "GLASBENIK" },
      "test-secret",
      { expiresIn: -1 }
    );

    expect(preveriToken(token)).toBeNull();
  });

  it("zavrne token z nedovoljenim algoritmom", () => {
    const token = jwt.sign(
      { vloga: "GLASBENIK" },
      "test-secret",
      { algorithm: "HS384" }
    );

    expect(preveriToken(token)).toBeNull();
  });
});