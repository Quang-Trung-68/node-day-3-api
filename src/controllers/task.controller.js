const TaskModel = require("@/models/task.model");

async function getAllTask(req, res) {
  try {
    const taskData = await TaskModel.findAll();
    return res.success(taskData);
  } catch (error) {
    console.log(error);
    res.error(500, "Database error");
  }
}

async function getTask(req, res) {
  try {
    const id = Number(req.params.id);
    const taskData = await TaskModel.findOne(id);
    if (!taskData) return res.error(404, "Task not found");
    return res.success(taskData);
  } catch (error) {
    console.log(error);
    res.error(500, "Database error");
  }
}

async function create(req, res) {
  try {
    const data = req.body;
    if (!data.title) {
      return res.error(400, "Title is required");
    }
    const taskData = await TaskModel.create(data);
    return res.success(taskData);
  } catch (error) {
    console.log(error);
    res.error(500, "Database error");
  }
}

async function update(req, res) {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const affectedRows = await TaskModel.update(id, data);
    if (affectedRows === 0) {
      return res.error(404, "Task not found");
    }
    return res.success("Update success", 200);
  } catch (error) {
    console.log(error);
    res.error(500, "Database error");
  }
}

async function destroy(req, res) {
  try {
    const id = Number(req.params.id);
    const affectedRows = await TaskModel.destroy(id);
    if (affectedRows === 0) {
      return res.error(404, "Task not found");
    }
    return res.success("Delete success", 200);
  } catch (error) {
    console.log(error);
    res.error(500, "Database error");
  }
}

module.exports = { getAllTask, getTask, create, update, destroy };
