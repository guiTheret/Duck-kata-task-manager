const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getPrompt = async () => {
  const prompt = await new Promise((resolve) => {
    rl.question(
      "What do you want to do?\n+ <description>\n- <id>\nx <id>\no <id>\nq\n",
      (input) => {
        resolve(input);
      }
    );
  });
};

const verifyInput = (input) => {
  if (input.startsWith("+")) return addTask(input);
  if (input.startsWith("-")) return removeTask(input);
  if (input.startsWith("x")) return updateTask(input);
  if (input.startsWith("o")) return updateTask(input);
  //if q exit
  if (input === "q") return "exit";
  return "Invalid input";
};

const getNewIndex = (array) => {
  const max = array.reduce((prev, current) =>
    prev && prev.id > current.id ? prev : current
  );
  return max + 1;
};

const addTask = (array, input) => {
  const res = array.find((el) => el.description == input);

  if (res) throw new Error("Task already in list");

  const newTask = {
    id: getNewIndex(array),
    description: input,
    status: "todo",
  };
  array.push(newTask);
  return array;
};

const removeTask = () => {};
const updateTask = () => {};
const listTasks = () => {};

module.exports = { verifyInput, addTask };
