import { Router } from 'express';
import { getUserByEmailAndPassword } from '../models/user';
import jwt from 'jsonwebtoken';
import { withAuth } from '../middleware/auth';

const router = Router();

// Login route
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmailAndPassword(email, password);
    const secret = process.env.JWT_SECRET;
    if (user && secret) {
      const payload = { id: user._id, email, role: user.role };
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

// Route to check if the user is logged in
router.get('/checkToken', withAuth, function (req, res) {
  res.status(200).json({ role: req.role, id: req.id });
});

export default router;
