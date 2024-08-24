const db = require("../../config/dbconfig");

exports.nickname = async (req, res) => {
  const { id, nickname } = req.body;

  try {
    const [existingNickname] = await db
      .promise()
      .query(
        "SELECT COUNT(*) AS count FROM owned WHERE nickname = ? AND id <> ?",
        [nickname, id]
      );

    if (existingNickname[0].count > 0) {
      return res.status(400).json({ error: "Nickname sudah ada" });
    }

    const sql = `
      UPDATE owned
      SET nickname = ?
      WHERE id = ?
    `;

    const [result] = await db.promise().query(sql, [nickname, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Pokémon tidak ditemukan" });
    }

    res.status(200).json({ message: "Nickname berhasil diperbarui" });
  } catch (error) {
    console.error("Gagal memperbarui nickname:", error.message);
    res
      .status(500)
      .json({ error: "Gagal memperbarui nickname", detail: error.message });
  }
};
