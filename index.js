import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      name: "Koushik",
      age: "23",
    },
  ]);
});

app.listen(8000, () => {
  console.log("App is running on at 8000");
});
