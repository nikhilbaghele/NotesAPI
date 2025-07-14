import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];

    if(!token) return res.status(401).json({msg: 'No token provided'})

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user
        next()
    } catch (err) {
        res.status(401).json({msg: "Invalid Token"})
    }
}

export default authMiddleware