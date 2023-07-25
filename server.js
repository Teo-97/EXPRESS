const express = require("express");
const app = express();

const tasks = [
  { id: "123456", isCompleted: false, description: "Walk the dog" },
  { id: "789012", isCompleted: true, description: "Buy groceries" },
  { id: "345678", isCompleted: false, description: "Read a book" },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
