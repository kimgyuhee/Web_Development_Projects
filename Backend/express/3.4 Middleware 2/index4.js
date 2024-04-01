import express from "express";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
