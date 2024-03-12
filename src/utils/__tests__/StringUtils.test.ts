import { capitalizeFirstLetter, formatToCamelCase, isEmpty } from "../StringUtils";

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

describe("formatToCamelCase function", () => {
  it("converts a string with spaces to camel case", () => {
    expect(formatToCamelCase("hello world")).toBe("helloWorld");
    expect(formatToCamelCase("GitHub Copilot")).toBe("gitHubCopilot");
  });

  it("converts a string with multiple spaces to camel case", () => {
    expect(formatToCamelCase("hello  world")).toBe("helloWorld");
    expect(formatToCamelCase("GitHub  Copilot")).toBe("gitHubCopilot");
  });

  it("does not modify strings already in camel case", () => {
    expect(formatToCamelCase("helloWorld")).toBe("helloWorld");
    expect(formatToCamelCase("gitHubCopilot")).toBe("gitHubCopilot");
  });

  it("handles empty string", () => {
    expect(formatToCamelCase("")).toBe("");
  });

  it("handles strings with only one character", () => {
    expect(formatToCamelCase("a")).toBe("a");
    expect(formatToCamelCase("Z")).toBe("z");
  });

  it("handles strings with only spaces", () => {
    expect(formatToCamelCase("   ")).toBe("");
  });
});
