import { app } from "./app.js";
// console.log(process.env.DB_CONNECTION_STRING);

const PORT = process.env.PORT ?? 10001;
const HOST = process.env.HOST ?? "0.0.0.0";

app.listen(PORT, HOST, function () {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
