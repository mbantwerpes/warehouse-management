import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secret = process.env.JWT_SECRET;

export const withAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
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
          req.role = decoded?.role;
          req.id = decoded?.id;
          next();
        }
      });
    } else {
      res.status(500).send('Internal server error');
    }
  }
};

export const authAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    if (secret) {
      // TODO find the types
      jwt.verify(token, secret, function (err: any, decoded: any) {
        if (err || decoded?.role !== 'admin') {
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.role = decoded?.role;
          req.id = decoded?.id;
          next();
        }
      });
    } else {
      res.status(500).send('Internal server error');
    }
  }
};
