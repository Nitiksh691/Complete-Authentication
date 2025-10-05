import jwt from "jsonwebtoken"

const ProtectedRoute = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token is required', success: false });
    }
    
    try {
        // ✅ FIXED: Extract token from "Bearer <token>" format
        const token = auth.startsWith('Bearer ') ? auth.slice(7) : auth;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token wrong or expired', success: false });
    }
}

export default ProtectedRoute
