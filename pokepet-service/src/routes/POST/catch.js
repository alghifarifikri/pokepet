const db = require("../../config/dbconfig");
const { v4: uuidv4 } = require("uuid");

exports.catch = async (req, res) => {
  const { name, type, id_pokemon, image_url } = req.body;

  const success = Math.random() < 0.5;

  if (!success) {
    return res.status(200).json({ message: "Gagal menangkap Pokémon" });
  }

  const id = uuidv4();
  const nickname = name;
  const count = 0;

  try {
    const sql = `
            INSERT INTO owned (id, name, nickname, type, id_pokemon, count, image_url)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

    await db
      .promise()
      .query(sql, [
        id,
        name,
        nickname,
        JSON.stringify(type),
        id_pokemon,
        count,
        image_url,
      ]);

    res.status(201).json({
      message: "Pokémon berhasil ditangkap",
      data: { id, name, nickname, type, id_pokemon, count, image_url },
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      error: "Gagal menyimpan data ke database",
      detail: error.message,
    });
  }
};
