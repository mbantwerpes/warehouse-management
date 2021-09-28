import { Router } from 'express';
import { getUserByEmailAndPassword } from '../models/user';
import jwt from 'jsonwebtoken';
import { withAuth } from '../middleware/auth';

const router = Router();

// Login route
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmailAndPassword(email.toLowerCase(), password);
    const secret = process.env.JWT_SECRET;
    if (user && secret) {
      const payload = { id: user._id, role: user.role };
      const token = jwt.sign(payload, secret, {
        expiresIn: '1h',
      });
      res.cookie('token', token, { httpOnly: true }).status(200).json(payload);
    } else {
      res.json(user);
    }
  } catch (err) {
    if (err instanceof Error) res.status(401).json({ message: err.message });
  }
});

// Route to check if the user is logged in
router.get('/checkToken', withAuth, function (req, res) {
  res.status(200).json({ role: req.role, id: req.id });
});

router.get('/logout', withAuth, function (_req, res) {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 5 * 1000),
    httpOnly: true,
  });
  res
    .status(200)
    .json({ success: true, message: 'User logged out successfully' });
});

export default router;
