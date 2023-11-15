const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];

const getPrompt = () => {
  return new Promise((resolve) => {
    rl.question(
      "What do you want to do?\n+ <description>\n- <id>\nx <id>\no <id>\nq\n",
      (input) => {
        resolve(input);
      }
    );
  });
};

const taskManager = async () => {
  while (true) {
    const input = await getPrompt();

    if (input?.startsWith("+")) {
      const task = {
        id: data.length + 1,
        description: input.slice(1),
        status: "todo",
      };
      data.push(task);
    } else if (input?.startsWith("-")) {
      const id = Number(input.slice(1));
      const index = data.findIndex((task) => task.id === id);
      if (index === -1) {
        console.log("Task not found");
        continue;
      }
      data.splice(index, 1);
    } else if (input?.startsWith("x")) {
      const id = Number(input.slice(1));
      const index = data.findIndex((task) => task.id === id);
      if (index === -1) {
        console.log("Task not found");
        continue;
      }
      data[index].status = "done";
    } else if (input?.startsWith("o")) {
      const id = Number(input.slice(1));
      const index = data.findIndex((task) => task.id === id);
      if (index === -1) {
        console.log("Task not found");
        continue;
      }
      data[index].status = "todo";
    } else if (input === "q") {
      rl.close();
      break;
    }
  }
};

taskManager();
