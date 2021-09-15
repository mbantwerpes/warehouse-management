import { Router } from 'express';
import { getUserByEmailAndPassword } from '../models/user';
import jwt from 'jsonwebtoken';

const router = Router();
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmailAndPassword(email, password);
    const secret = process.env.JWT_SECRET;
    if (user && secret) {
      const payload = { email, role: user.role };
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h',
      });
      res.cookie('token', token, { httpOnly: true }).sendStatus(200);
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
