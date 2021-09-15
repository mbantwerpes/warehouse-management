import { Router } from 'express';
import { getUserByEmailAndPassword } from '../models/user';

const router = Router();
router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmailAndPassword(email, password);

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
