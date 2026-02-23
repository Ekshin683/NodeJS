import jwt from 'jsonwebtoken';

export const verifyToken = (secretKey) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        const token = authHeader?.slice(7);
        if (!token) {
            return res.status(401).json({message: "Not found"});
        }
        try {
            const decoded = jwt.verify(token, secretKey);
            req.user = decoded;
            next();
        } catch (err) {
            res.status(401).json({message: "Not found"});
        }
    }
}

export const authorize = (requiredRole) => {
    return (req, res, next) => {
        if (req.user && req.user.role === requiredRole) {
            next();
        } else {
            res.status(403).json({message: `${requiredRole} not found`});
        }
    }
}