const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const { create } = require("express-handlebars");

const uri = 'mongodb+srv://mrsardor:F9nlgGXG9jKbiLEW@cluster0.er5dhmi.mongodb.net/technoshop'

const hbs = create({
  extname: "hbs",
  defaultLayout: "layout",
  layoutsDir: "./views/layouts",
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true
  }
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

const port = normalizePort(process.env.PORT || 3001);

async function dbConnection() {
  await mongoose.connect(uri, () => {
    console.log("MongoDB connected");
  });
}

dbConnection();

// Import routes
const indexRouter = require("./routes/index");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", port);

// Routing
app.use("/index", indexRouter);

try {
  app.listen(port, () => {
    console.log("Server working on port ", app.get("port"));
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
