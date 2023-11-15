const readline = require("readline");
const { getPrompt } = require("./functions");

describe("getPrompt", () => {
  //check if first character is + - x o or q, if not return error
  test("should return error if first character is not + - x o or q", async () => {
    readline.createInterface().question.mockImplementationOnce((_, cb) => {
      cb("a");
    });
    const result = await getPrompt();
    expect(result).toBe("Error");
  });
});
