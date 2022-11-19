// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// terminate the game using ctrl + c
// Press WASD to move four direction
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    console.log("Move: up");
  }

  if (key === 'a') {
    console.log("Move: left");
  }

  if (key === 's') {
    console.log("Move: down");
  }

  if (key === 'd') {
    console.log("Move: right");
  }
};

module.exports = { setupInput };