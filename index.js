const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());

app.post("/hash", async (req, res) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ error: "Password required" });

  try {
    const hash = await bcrypt.hash(password, 10);
    res.json({ hash });
  } catch (err) {
    res.status(500).json({ error: "Error hashing password" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
