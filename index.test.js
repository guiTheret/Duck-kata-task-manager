const { verifyInput, addTask } = require("./functions");
const readline = require("readline");

describe("verifyInput", () => {
  // Check if the first character is + - x o or q; if not, return an error
  test("should return error if the first character is not + - x o or q", async () => {
    const res = verifyInput("a");
    expect(res).toBe("Invalid input");
  });
});

// describe("verifyInputIsValid", () => {
//   // Check if the first character is + - x o or q; if not, return an error
//   test("should return error if the first character is not + - x o or q", async () => {
//     const res = verifyInput("+");
//     expect(res).not.toBe("Invalid input");
//   });
// });

describe("checkAddInput", () => {
  test("should return error if list already in list", () => {
    const testArray = [
      {
        id: 1,
        description: "test",
        status: "todo",
      },
    ];

    const existingTask = "test";

    expect(() => addTask(testArray, existingTask)).toThrowError(
      "Task already in list"
    );
  });

  test("should add a new task to the array", () => {
    const testArray = [
      {
        id: 1,
        description: "test",
        status: "todo",
      },
    ];

    const inputTask = "newTask";

    const newArray = addTask([...testArray], inputTask);

    expect(newArray).toHaveLength(testArray.length + 1);
    expect(newArray[newArray.length - 1]).toEqual({
      id: expect.any(Number),
      description: inputTask,
      status: "todo",
    });
  });
});
