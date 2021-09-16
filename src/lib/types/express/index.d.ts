// This adds the properties to the Request type
// Reference: https://github.com/3mard/ts-node-example
declare namespace Express {
  interface Request {
    email?: string;
    role?: 'student' | 'admin';
  }
}
