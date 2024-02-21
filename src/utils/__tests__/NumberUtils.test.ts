import { isCorrectAmount } from "../NumberUtils";

describe("isCorrectAmount function", () => {
  it("returns false for undefined input", () => {
    expect(isCorrectAmount(undefined)).toBe(false);
  });

  it("returns false for negative numbers", () => {
    expect(isCorrectAmount(-10)).toBe(false);
  });

  it("returns false for numbers with more than two decimal places", () => {
    expect(isCorrectAmount(10.555)).toBe(false);
  });

  it("returns true for numbers with up to two decimal places", () => {
    expect(isCorrectAmount(10.55)).toBe(true);
    expect(isCorrectAmount(10.5)).toBe(true);
    expect(isCorrectAmount(10)).toBe(true);
  });

  it("returns true for zero", () => {
    expect(isCorrectAmount(0)).toBe(true);
  });

  it("returns false for non-numeric input", () => {
    expect(isCorrectAmount(NaN)).toBe(false);
    expect(isCorrectAmount(Infinity)).toBe(false);
    expect(isCorrectAmount("abc" as any)).toBe(false);
  });
});
