const jwt = require('jsonwebtoken');

// Authentication Middleware
function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access denied');

    jwt.verify(token, 'secret-key', (err, user) => {
        if (err) return res.status(403).send('Invalid token');
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;