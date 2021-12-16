const db = require("../config/database");

const table = "users";

module.exports = {
  get: (req, res) => {
    let sql = `SELECT * FROM ${table}`;
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },

  detail: (req, res) => {
    let sql = `SELECT * FROM ${table} WHERE id = ?`;
    db.query(sql, [req.params.userId], (err, response) => {
      if (err) throw err;
      res.json(response[0]);
    });
  },

  search: (req, res) => {
    let name = (req.params.name && `%${req.params.name}%`) || "%%";

    let sql = `SELECT * FROM ${table} WHERE name like ? order by created_at desc limit 30`;
    db.query(sql, [name], (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },

  update: (req, res) => {
    let data = req.body;
    let userId = req.params.userId;
    let sql = `UPDATE ${table} SET ? WHERE id = ?`;
    db.query(sql, [data, userId], (err, response, field) => {
      if (err) throw err;
      res.json({
        message: "success",
        id: userId,
        status: data.status,
      });
    });
  },

  store: (req, res) => {
    let data = req.body;
    let sql = `INSERT INTO ${table} SET ?`;
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "success" });
    });
  },

  delete: (req, res) => {
    let sql = `DELETE FROM ${table} WHERE id = ?`;
    db.query(sql, [req.params.userId], (err, response, field) => {
      if (err) throw err;
      res.json({ message: "success" });
    });
  },
};
