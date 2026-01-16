const pool = require("../config/database");

async function findAll() {
  const [rows] = await pool.query(
    "SELECT * FROM tasks ORDER BY created_at DESC;"
  );
  return rows;
}

async function findOne(id) {
  const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?;", [id]);
  return rows[0] || null;
}

async function create(data) {
  const { title, completed } = data;
  const [result] = await pool.query(
    "INSERT INTO tasks (title, completed) VALUES (?,?);",
    [title, completed]
  );
  return {
    id: result.insertId,
    ...data,
  };
}

async function update(id, data) {
  const { title, completed } = data;
  const updates = [];
  const values = [];

  if (title !== undefined) {
    updates.push("title = ?");
    values.push(title);
  }

  if (completed !== undefined) {
    updates.push("completed = ?");
    values.push(completed);
  }

  if (updates.length === 0) {
    return 0; // Nothing to update
  }

  const sql = `UPDATE tasks SET ${updates.join(", ")} WHERE id = ?`;
  values.push(id);

  const [result] = await pool.query(sql, values);

  return result.affectedRows;
}

async function destroy(id) {
  const [rows] = await pool.query("DELETE FROM tasks WHERE id = ?;", [id]);
  return rows.affectedRows;
}

module.exports = { findAll, findOne, create, update, destroy };
