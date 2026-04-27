import express from "express";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const ARRAY = [1, 2, 3, 4, 5];

app.get("/", (_req, res) => {
  res.json({
    ok: true,
    message: "API is running",
    routes: ["/", "/get-data", "/random"],
  });
});

app.get("/get-data", (_req, res) => {
  res.json({
    ok: true,
    message: "send array",
    data: ARRAY,
  });
});

app.get("/random", (_req, res) => {
  res.json({
    ok: true,
    value: Math.floor(Math.random() * 100) + 1,
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
