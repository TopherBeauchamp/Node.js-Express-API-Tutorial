import { createServer } from "./server";
import config from "./config";

const server = createServer();

server.listen(3000, () => {
  console.log(`api running on ${config.port}`);
});
