import io from "socket.io-client";
export default (app, inject) => {
  const socket = io("http://localhost:3002");

  inject("socket", socket);
};
