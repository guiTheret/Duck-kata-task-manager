const getPrompt = async () => {
  const prompt = await new Promise((resolve) => {
    rl.question(
      "What do you want to do?\n+ <description>\n- <id>\nx <id>\no <id>\nq\n",
      (input) => {
        resolve(input);
      }
    );
  });
  // check if first character is + - x o or q, if not return error
  if (!"+-xoq".includes(prompt[0])) {
    return "Error";
  }
};

module.exports = { getPrompt };
