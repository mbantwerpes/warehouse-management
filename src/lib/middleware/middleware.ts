import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface IReqWithEmail extends Request {
  email: string;
}

const secret = process.env.JWT_SECRET;

const withAuth = function (
  req: IReqWithEmail,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    if (secret) {
      // TODO find the types
      jwt.verify(token, secret, function (err: any, decoded: any) {
        if (err) {
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.email = decoded?.email;
          next();
        }
      });
    } else {
      res.status(500).send('Internal server error');
    }
  }
};
module.exports = withAuth;
