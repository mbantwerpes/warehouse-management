import { Router } from 'express';
import { authAdmin } from '../middleware/auth';
import {
  getTechComponents,
  getTechComponent,
  searchTechComponents,
  addTechComponent,
  updateTechComponent,
  deleteTechComponent,
  getTechComponentsByIdArray,
} from '../models/techComponent';
import type { TechComponent } from '../types/types';
import multer from 'multer';
import fs from 'fs';

const upload = multer({
  storage: multer.diskStorage({
    destination(_req, _file, cb) {
      const path = `./files`;
      fs.mkdirSync(path, { recursive: true });
      cb(null, './files');
    },
    filename(_req, file, cb) {
      cb(null, `${new Date().getTime()}_${file.originalname}`);
    },
  }),
  fileFilter(_req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      return cb(new Error('only upload files with jpg, jpeg, png format.'));
    }
    cb(null, true); // continue with upload
  },
});

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { searchValue } = req.query;
    const { cartRequest } = req.query;
    const ids = req.query.id as string[];
    if (ids) {
      // If only one id is given, then it is not an array
      if (typeof ids === 'string') {
        const techComponent = await getTechComponent(ids);
        res.json([techComponent]);
      } else {
        const techComponents = await getTechComponentsByIdArray(ids);
        res.json(techComponents);
      }
    }
    // If searchValue exists use search function else get all
    else if (searchValue && typeof searchValue === 'string') {
      const techComponents = await searchTechComponents(searchValue);
      res.json(techComponents);
    } else if (!cartRequest) {
      const techComponents = await getTechComponents();
      res.json(techComponents);
    }
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const techComponent = await getTechComponent(id);
    res.json(techComponent);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.post('/', authAdmin, upload.single('file'), async (req, res) => {
  try {
    const path = req.file?.path;
    const mimetype = req.file?.mimetype;
    const techComponentData: TechComponent = { ...req.body, path, mimetype };
    // const techComponentData: TechComponent = req.body;
    addTechComponent(techComponentData);
    res.json(techComponentData);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.put('/:id', authAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    const techComponentData = req.body;
    updateTechComponent(id, techComponentData);
    res.json(techComponentData);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', authAdmin, async (req, res) => {
  try {
    const id = req.params.id;
    deleteTechComponent(id);
    res.json(id);
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
});

export default router;
