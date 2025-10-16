export function errorHandler(err, req, res, next) {
  console.error(err);

  const status = err.statusCode || 500;
  const message =
    err.message ||
    `Failed to ${req.method === "GET" ? "fetch" :
                req.method === "POST" ? "create" :
                req.method === "PUT" ? "update" :
                req.method === "DELETE" ? "delete" : "process"} ${req.path}`;

  res.status(status).json({ status: "error", message });
}