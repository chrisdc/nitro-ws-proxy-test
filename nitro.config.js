import { defineNitroConfig } from "nitropack";

export default defineNitroConfig({
  devProxy: {
    "/ws": {
      target: "ws://localhost:8080",
      ws: true,
    },
  },
});
