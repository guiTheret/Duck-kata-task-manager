const prompt = require("prompt-sync")();
const data = [];

// infinite loop to keep the program running
while (true) {
  // ask user for input, input can be - + x o q
  const input = prompt(
    "What do you want to do? \n + <description> \n - <id> \n x <id> \n o <id> \n q"
  );

  // check input
  if (input?.startsWith("+")) {
    // add task
    const task = {
      id: data.length + 1,
      description: input.slice(1),
      status: "todo",
    };
    data.push(task);
  } else if (input?.startsWith("-")) {
    // remove task
    const id = Number(input.slice(1));
    const index = data.findIndex((task) => task.id === id);
    // if index is -1, task is not found
    if (index === -1) {
      console.log("Task not found");
      continue;
    }
    data.splice(index, 1);
  } else if (input?.startsWith("x")) {
    // set status to done
    const id = Number(input.slice(1));
    const index = data.findIndex((task) => task.id === id);
    // if index is -1, task is not found
    if (index === -1) {
      console.log("Task not found");
      continue;
    }
    data[index].status = "done";
  } else if (input?.startsWith("o")) {
    // set status to todo
    const id = Number(input.slice(1));
    const index = data.findIndex((task) => task.id === id);
    // if index is -1, task is not found
    if (index === -1) {
      console.log("Task not found");
      continue;
    }
    data[index].status = "todo";
  } else if (input === "q") {
    // quit program
    break;
  }
}
