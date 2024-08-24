const db = require("../../config/dbconfig");
const { checkRandomPrime } = require("../../util/prime");

exports.release = async (req, res) => {
  const { id } = req.body;

  try {
    const isPrime = checkRandomPrime(2, 1000);

    if (isPrime) {
      const sql = "DELETE FROM owned WHERE id = ?";
      const [result] = await db.promise().query(sql, [id]);

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Pokémon tidak ditemukan" });
      }

      res.status(200).json({ message: "Pokémon berhasil di-release" });
    } else {
      res.status(200).json({
        message: "Pokémon gagal di-release",
      });
    }
  } catch (error) {
    console.error("Gagal menghapus Pokémon:", error.message);
    res
      .status(500)
      .json({ error: "Gagal menghapus Pokémon", detail: error.message });
  }
};
