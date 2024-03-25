import jwt from "jsonwebtoken";

const AuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Acceso no autorizado. Token no proporcionado." });
    }

    try {
        const decoded = jwt.verify(token, "codigosecreto");
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Acceso no autorizado. Token inválido." });
    }
};

export default AuthMiddleware;