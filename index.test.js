const { verifyInput } = require("./functions");
const readline = require("readline");

describe("verifyInput", () => {
  // Check if the first character is + - x o or q; if not, return an error
  test("should return error if the first character is not + - x o or q", async () => {
    const res = verifyInput("a");
    expect(res).toBe("Invalid input");
  });
});


describe("verifyInputIsValid", () => {
  // Check if the first character is + - x o or q; if not, return an error
  test("should return error if the first character is not + - x o or q", async () => {
    const res = verifyInput("+");
    expect(res).not.toBe("Invalid input");
  });
});