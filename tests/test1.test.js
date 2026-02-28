import { describe, it, expect } from "vitest";
import { sum } from "./sum.js";

describe("add function", () => {
  it("should return 3 when adding 1 and 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
