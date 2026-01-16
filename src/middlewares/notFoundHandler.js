function notFoundHandler(req, res, next) {
  res.error(404, "Resource not found");
}

module.exports = notFoundHandler;
