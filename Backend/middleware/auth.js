// import jwt from 'jsonwebtoken'

// const authMiddleware = async (req, res, next) => {
//     const {token} = req.headers
//     if (!token) {
//         return res.json({
//             success: false,
//             message: 'Not Authorized Login Agian'
//         })
//     }
//     try {
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//         console.log(token_decode);
        
//         req.body.userId = token_decode.id
//         next()
//     } catch (error) {
//         console.log(error);
//         res.json({
//             success: false,
//             message: 'Error'
//         })
//     }
// }

// export default authMiddleware;




import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token missing' });
  }

  const token = authHeader.split(' ')[1];
   if (!token) return res.status(401).json({ message: 'Unauthorized: Token missing' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;  // yahi userId aapke controllers me milega
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;

