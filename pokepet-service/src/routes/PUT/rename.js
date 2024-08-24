const db = require("../../config/dbconfig");
const { fibonacci } = require("../../util/fibonacci");

exports.rename = async (req, res) => {
  const { id } = req.body;

  try {
    const [rows] = await db
      .promise()
      .query("SELECT * FROM owned WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Pokémon tidak ditemukan" });
    }

    const pokemon = rows[0];
    let baseNickname = pokemon.nickname;

    const nicknameParts = pokemon.nickname.split(" - ");
    if (nicknameParts.length === 2 && !isNaN(nicknameParts[1])) {
      baseNickname = nicknameParts[0];
    }

    const currentCount = pokemon.count || 0;
    const fibonacciValue = fibonacci(currentCount);
    const updatedNickname = `${baseNickname} - ${fibonacciValue}`;

    const [result] = await db
      .promise()
      .query("UPDATE owned SET nickname = ?, count = ? WHERE id = ?", [
        updatedNickname,
        currentCount + 1,
        id,
      ]);

    if (result.affectedRows === 0) {
      return res.status(500).json({ message: "Gagal meng-update nickname" });
    }

    res.status(200).json({
      message: "Nickname berhasil direname",
      nickname: updatedNickname,
    });
  } catch (error) {
    console.error("Gagal merename nickname:", error.message);
    res
      .status(500)
      .json({ message: "Gagal merename nickname", error: error.message });
  }
};
