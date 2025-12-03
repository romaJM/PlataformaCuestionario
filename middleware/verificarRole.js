const verificarRole = (rolesPermitidos = []) => {
  return (req, res, next) => {
    if (!req.user)
      return res.status(403).json({ message: "No autenticado" });

    if (!rolesPermitidos.includes(req.user.rol))
      return res.status(403).json({ message: "No tienes permisos" });

    next();
  };
};

module.exports = verificarRole;
