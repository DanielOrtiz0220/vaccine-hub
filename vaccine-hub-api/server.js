const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const { PORT } = require("./config");
const authRoutes = require("./routes/auth");
const { NotFoundError } = require("./utils/errors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("tiny"));

app.use("/auth", authRoutes);

app.use((req, res, next) => {
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🤗 Server running http://localhost:${PORT}`);
});
