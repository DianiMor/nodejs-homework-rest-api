/* const mongoose = require("mongoose");
const app = require("./app"); */
/* const { MONGO_URI, PORT } = process.env; */

const mongoose = require("mongoose");
const app = require("./app");
/* require("dotenv").config(); */
const { MONGO_URI, PORT } = process.env;
mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log("Database connection successful");
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

/* const port = process.env.PORT || 3000;  */

// Validar que las variables de entorno estén definidas
/* if (!process.env.MONGO_URI) {
  console.error("ERROR: MONGO_URI no está definido en el archivo .env");
  process.exit(1);
}

console.log(`Conectando a la base de datos en: ${process.env.MONGO_URI}`);
console.log(`El servidor se ejecutará en el puerto: ${port}`);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
    app.listen(port, () => {
      console.log(`Server running. Use our API on port: ${port}`);
    });
  }); */
/*  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  }); */
