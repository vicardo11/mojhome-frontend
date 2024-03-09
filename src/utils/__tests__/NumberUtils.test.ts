import { isCorrectAmountFormat, isGreaterThanZero } from "../NumberUtils";

describe("isCorrectAmount function", () => {
  it("returns false for undefined input", () => {
    expect(isCorrectAmountFormat(undefined)).toBe(false);
  });

  it("returns false for negative numbers", () => {
    expect(isCorrectAmountFormat(-10)).toBe(false);
  });

  it("returns false for numbers with more than two decimal places", () => {
    expect(isCorrectAmountFormat(10.555)).toBe(false);
  });

  it("returns true for numbers with up to two decimal places", () => {
    expect(isCorrectAmountFormat(10.55)).toBe(true);
    expect(isCorrectAmountFormat(10.5)).toBe(true);
    expect(isCorrectAmountFormat(10)).toBe(true);
  });

  it("returns true for zero", () => {
    expect(isCorrectAmountFormat(0)).toBe(true);
  });

  it("returns false for non-numeric input", () => {
    expect(isCorrectAmountFormat(NaN)).toBe(false);
    expect(isCorrectAmountFormat(Infinity)).toBe(false);
    expect(isCorrectAmountFormat("abc" as any)).toBe(false);
  });
});

describe("isGreaterThanZero function", () => {
  it("returns false for undefined input", () => {
    expect(isGreaterThanZero(undefined)).toBe(false);
  });

  it("returns false for negative numbers", () => {
    expect(isGreaterThanZero(-10)).toBe(false);
  });

  it("returns false for zero", () => {
    expect(isGreaterThanZero(0)).toBe(false);
  });

  it("returns true for positive numbers", () => {
    expect(isGreaterThanZero(10)).toBe(true);
  });

  it("returns false for non-numeric input", () => {
    expect(isGreaterThanZero(NaN)).toBe(false);
    expect(isGreaterThanZero("abc" as any)).toBe(false);
  });
});
