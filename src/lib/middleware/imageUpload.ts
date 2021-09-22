import multer from 'multer';
import fs from 'fs';

const uploadFile = multer({
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
  limits: {
    fileSize: 1000000, // max file size 1MB = 1000000 bytes
  },
  fileFilter(_req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
      return cb(new Error('only upload files with jpg, jpeg, png format.'));
    }
    cb(null, true); // continue with upload
  },
});

export default uploadFile;
