/* eslint-disable */
const exec = require("child_process").exec;

if (process.env.NODE_ENV !== "production") {
  exec("husky install", (error, stdout, stderr) => {
    if (error) {
      console.log(`Error: ${error}`);
      return;
    }
    console.log(stdout);
    console.log(stderr);
  });
}
