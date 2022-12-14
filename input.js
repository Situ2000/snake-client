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
    connection.write("Move: up");
  }

  if (key === 'a') {
    connection.write("Move: left");
  }

  if (key === 's') {
    connection.write("Move: down");
  }

  if (key === 'd') {
    connection.write("Move: right");
  }

  // Send message for everyone to see
  if (key === 'h') {
    connection.write(`Say: Hi`);
  }

  if (key === 'y') {
    connection.write(`Say: Yes`);
  }

  if (key === 'n') {
    connection.write(`Say: No`);
  }

};

module.exports = { setupInput };