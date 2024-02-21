import { capitalizeFirstLetter, isEmpty } from "../StringUtils";

describe("capitalizeFirstLetter function", () => {
  it("capitalizes the first letter of a word", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
    expect(capitalizeFirstLetter("world")).toBe("World");
  });

  it("does not modify strings already starting with a capital letter", () => {
    expect(capitalizeFirstLetter("Hello")).toBe("Hello");
    expect(capitalizeFirstLetter("World")).toBe("World");
  });

  it("handles empty string", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("handles strings with only one character", () => {
    expect(capitalizeFirstLetter("a")).toBe("A");
    expect(capitalizeFirstLetter("z")).toBe("Z");
  });
});

describe("isEmpty function", () => {
  it("returns true for empty string", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("returns true for string with only whitespace characters", () => {
    expect(isEmpty("   ")).toBe(true);
    expect(isEmpty("\t")).toBe(true);
    expect(isEmpty("\n")).toBe(true);
  });

  it("returns true for undefined input", () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it("returns false for non-empty string", () => {
    expect(isEmpty("hello")).toBe(false);
    expect(isEmpty("world")).toBe(false);
  });
});
