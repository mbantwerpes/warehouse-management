import { Router } from 'express';
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
  searchUsers,
} from '../models/user';
import type { User } from '../types';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { searchValue } = req.query;
    if (searchValue && typeof searchValue === 'string') {
      const users = await searchUsers(searchValue);
      res.json(users);
    } else {
      const users = await getUsers();
      res.json(users);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUser(id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const userData: User = req.body;
    addUser(userData);
    res.json(userData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const userData = req.body;
    updateUser(id, userData);
    res.json(userData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    deleteUser(id);
    res.json(id);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
