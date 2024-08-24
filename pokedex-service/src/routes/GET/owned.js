const db = require("../../config/dbconfig");

exports.owned = async (req, res) => {
  try {
    const sql = "SELECT * FROM owned";
    const [rows] = await db.promise().query(sql);

    res.status(200).json({
      success: true,
      result: rows.map((row) => {
        const temp = {
          ...row,
          type: JSON.parse(row.type),
        };
        return temp;
      }),
    });
  } catch (error) {
    console.error("Gagal mengambil data list:", error.message);
    res
      .status(500)
      .json({ error: "Gagal mengambil data list", detail: error.message });
  }
};
