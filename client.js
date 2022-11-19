const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // send the name to the server
  conn.on("connect", () => {
    conn.write("Name: YS");
  });

  // make the snake to move up when connected
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });
  
  // print a message when the connection is successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  // handle incoming data and console.log it for the player
  conn.on("data", (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };