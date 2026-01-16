require("module-alias/register");
const express = require("express");
const cors = require("cors");
const routes = require("@/routes");

const responseFormat = require("./src/middlewares/responseFormat");
const { apiRateLimiter } = require("./src/middlewares/rateLimiter");
const notFoundHandler = require("./src/middlewares/notFoundHandler");
const exceptionHandler = require("./src/middlewares/exceptionHandler");

const app = express();
app.use(express.json());

app.use(responseFormat);
app.use(apiRateLimiter);

const corsOptions = {
  origin: ["http://localhost:5173", "https://quang-trung-68.github.io"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  maxAge: 3600,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/api", routes);

app.get("/test-success", (req, res) => {
  res.success({ message: "Hello World" });
});

app.get("/test-error", (req, res) => {
  throw Error("Test exception");
  res.success({ message: "Hello World" });
});

app.use(notFoundHandler);
app.use(exceptionHandler);

const port = 3000;
app.listen(port, () => {
  console.log("Server running on port ", port);
});
