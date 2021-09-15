// This adds the properties to the Request type
declare namespace Express {
  interface Request {
    email?: string;
  }
}
